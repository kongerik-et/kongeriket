"use server";

import { cookies } from "next/headers";
import { DEMO_COOKIE, type DemoSession } from "@/lib/auth";

export type AuthState = {
  ok: boolean;
  message: string;
};

export async function requestMagicLink(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = String(formData.get("email") || "").trim().toLowerCase();
  if (!email || !email.includes("@")) {
    return { ok: false, message: "Enter a valid email address." };
  }

  // Stub: real magic-link email later. Demo session for gated UI review.
  const session: DemoSession = {
    email,
    signedInAt: new Date().toISOString(),
  };

  const jar = await cookies();
  jar.set(DEMO_COOKIE, encodeURIComponent(JSON.stringify(session)), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });

  return {
    ok: true,
    message: "Demo session started. Magic-link email is not wired yet.",
  };
}

export async function signOut(): Promise<void> {
  const jar = await cookies();
  jar.delete(DEMO_COOKIE);
}

export async function subscribeStub(
  _prev: { ok: boolean; message: string },
  formData: FormData
): Promise<{ ok: boolean; message: string }> {
  const email = String(formData.get("email") || "").trim();
  const consent = formData.get("consent");
  if (!email || !email.includes("@")) {
    return { ok: false, message: "Enter a valid email address." };
  }
  if (!consent) {
    return { ok: false, message: "Consent is required." };
  }
  return {
    ok: true,
    message: "You are on the list stub. Real email delivery is not wired yet.",
  };
}
