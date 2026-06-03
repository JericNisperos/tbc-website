import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const LOCAL_PATH = path.join(process.cwd(), "data", "menu.json");
const R2_KEY = process.env.R2_MENU_KEY || "tbc-website/menu.json";

function hasR2Config() {
  return Boolean(
    process.env.R2_ACCESS_KEY_ID &&
      process.env.R2_SECRET_ACCESS_KEY &&
      process.env.R2_BUCKET_NAME &&
      (process.env.R2_ENDPOINT || process.env.R2_ACCOUNT_ID),
  );
}

let _client;
function r2Client() {
  if (_client) return _client;
  _client = new S3Client({
    region: "auto",
    endpoint:
      process.env.R2_ENDPOINT ||
      `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
  });
  return _client;
}

async function getMenuFromFile() {
  const raw = await fs.readFile(LOCAL_PATH, "utf-8");
  return JSON.parse(raw);
}

async function saveMenuToFile(menu) {
  const serialized = JSON.stringify(menu, null, 2) + "\n";
  await fs.writeFile(LOCAL_PATH, serialized, "utf-8");
}

async function getMenuFromR2() {
  try {
    const res = await r2Client().send(
      new GetObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: R2_KEY,
      }),
    );
    const text = await res.Body.transformToString();
    return JSON.parse(text);
  } catch (err) {
    const code = err?.name || err?.Code;
    const status = err?.$metadata?.httpStatusCode;
    if (code === "NoSuchKey" || status === 404) {
      // First run against an empty bucket: seed from the local file.
      const seed = await getMenuFromFile();
      await saveMenuToR2(seed);
      return seed;
    }
    throw err;
  }
}

async function saveMenuToR2(menu) {
  const body = JSON.stringify(menu, null, 2) + "\n";
  await r2Client().send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: R2_KEY,
      Body: body,
      ContentType: "application/json",
      CacheControl: "no-store",
    }),
  );
}

export async function getMenu() {
  if (hasR2Config()) return getMenuFromR2();
  return getMenuFromFile();
}

export async function saveMenu(menu) {
  if (hasR2Config()) return saveMenuToR2(menu);
  return saveMenuToFile(menu);
}

export function findSection(menu, kind, id) {
  return menu[kind]?.find((s) => s.id === id) ?? null;
}
