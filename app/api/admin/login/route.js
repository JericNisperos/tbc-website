import { cookies } from "next/headers";
import {
  COOKIE_NAME,
  getAdminPassword,
  sessionToken,
} from "@/lib/admin-auth";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const password = body?.password;
  if (typeof password !== "string" || password !== getAdminPassword()) {
    return Response.json({ error: "Invalid password" }, { status: 401 });
  }
  const token = await sessionToken(password);
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return Response.json({ ok: true });
}
