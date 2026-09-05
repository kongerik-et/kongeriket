import { cookies } from "next/headers";

export const DEMO_COOKIE = "kongeriket_demo_session";

export type DemoSession = {
  email: string;
  signedInAt: string;
};

export async function getDemoSession(): Promise<DemoSession | null> {
  const jar = await cookies();
  const raw = jar.get(DEMO_COOKIE)?.value;
  if (!raw) return null;
  try {
    const decoded = decodeURIComponent(raw);
    const data = JSON.parse(decoded) as DemoSession;
    if (!data?.email) return null;
    return data;
  } catch {
    return null;
  }
}

export async function isSignedIn(): Promise<boolean> {
  return (await getDemoSession()) !== null;
}

export async function isLoggedIn(): Promise<boolean> {
  return isSignedIn();
}
