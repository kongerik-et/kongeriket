"use client";

import { useActionState, useEffect } from "react";
import { requestMagicLink, type AuthState } from "@/actions/auth";
import { useRouter } from "@/i18n/navigation";

const initial: AuthState = { ok: false, message: "" };

export function LoginForm({
  emailLabel,
  submitLabel,
  hint,
}: {
  emailLabel: string;
  submitLabel: string;
  hint: string;
}) {
  const [state, action, pending] = useActionState(requestMagicLink, initial);
  const router = useRouter();

  useEffect(() => {
    if (state.ok) {
      router.refresh();
      router.push("/members");
    }
  }, [state.ok, router]);

  return (
    <form action={action} className="mt-8 max-w-md space-y-4">
      <label className="block text-sm text-steel">
        <span className="mb-2 block">{emailLabel}</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="w-full border border-fog bg-paper px-3 py-2 text-ink outline-none focus:border-steel"
          placeholder="you@example.com"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="rounded-sm bg-signal px-4 py-2 text-sm text-paper hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "..." : submitLabel}
      </button>
      <p className="text-sm text-steel">{hint}</p>
      {state.message ? (
        <p className={state.ok ? "text-sm text-ink" : "text-sm text-signal"}>{state.message}</p>
      ) : null}
    </form>
  );
}
