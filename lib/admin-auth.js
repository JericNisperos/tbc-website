import "server-only";
import { cookies } from "next/headers";

export const COOKIE_NAME = "tbc_admin";
const SESSION_SALT = "tbc-admin-session-v1";

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "tbc71864245";
}

export async function sessionToken(password) {
  const data = new TextEncoder().encode(password + SESSION_SALT);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function isAuthenticated() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return false;
  const expected = await sessionToken(getAdminPassword());
  return token === expected;
}
