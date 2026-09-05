"use client";

import { signOut } from "@/actions/auth";
import { useRouter } from "@/i18n/navigation";

export function SignOutButton({ label }: { label: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      className="border border-fog px-4 py-2 text-sm text-ink hover:border-ink"
      onClick={async () => {
        await signOut();
        router.refresh();
        router.push("/");
      }}
    >
      {label}
    </button>
  );
}
