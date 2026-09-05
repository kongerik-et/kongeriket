"use client";

import { useActionState } from "react";
import { subscribeStub } from "@/actions/auth";

const initial = { ok: false, message: "" };

export function SubscribeForm({
  labels,
}: {
  labels: {
    email: string;
    name: string;
    language: string;
    consent: string;
    submit: string;
  };
}) {
  const [state, action, pending] = useActionState(subscribeStub, initial);

  return (
    <form action={action} className="max-w-md space-y-4">
      <label className="block space-y-1 text-sm">
        <span>{labels.email}</span>
        <input
          required
          type="email"
          name="email"
          className="w-full border border-fog bg-paper px-3 py-2 text-ink outline-none focus:border-steel"
        />
      </label>
      <label className="block space-y-1 text-sm">
        <span>{labels.name}</span>
        <input
          type="text"
          name="name"
          className="w-full border border-fog bg-paper px-3 py-2 text-ink outline-none focus:border-steel"
        />
      </label>
      <label className="block space-y-1 text-sm">
        <span>{labels.language}</span>
        <select
          name="language"
          defaultValue="en"
          className="w-full border border-fog bg-paper px-3 py-2 text-ink outline-none focus:border-steel"
        >
          <option value="en">English</option>
          <option value="no">Norsk</option>
        </select>
      </label>
      <label className="flex items-start gap-2 text-sm">
        <input required type="checkbox" name="consent" className="mt-1" value="yes" />
        <span>{labels.consent}</span>
      </label>
      <button
        type="submit"
        disabled={pending}
        className="rounded-sm bg-signal px-4 py-2 text-paper hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "..." : labels.submit}
      </button>
      {state.message ? (
        <p className={state.ok ? "text-sm text-ink" : "text-sm text-signal"}>{state.message}</p>
      ) : null}
    </form>
  );
}
