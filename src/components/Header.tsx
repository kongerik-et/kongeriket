"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

const links = [
  { href: "/research" as const, key: "research" as const },
  { href: "/publications" as const, key: "publications" as const },
  { href: "/about" as const, key: "about" as const },
  { href: "/subscribe" as const, key: "subscribe" as const },
];

export function Header({ signedIn }: { signedIn: boolean }) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: "en" | "no") {
    router.replace(pathname as never, { locale: next });
  }

  return (
    <header className="border-b-2 border-ink">
      <div className="h-1 w-full bg-signal" />
      <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-6 px-4 py-5">
        <div className="space-y-1">
          <Link
            href="/"
            className="font-serif text-[1.75rem] leading-none tracking-tight text-ink no-underline hover:text-signal"
          >
            Kongeriket
          </Link>
          <p className="hidden max-w-xs text-xs leading-snug text-steel sm:block">{t("tagline")}</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-ink">
          {links.map((item) => (
            <Link key={item.key} href={item.href} className="no-underline hover:text-signal">
              {t(item.key)}
            </Link>
          ))}
          {signedIn ? (
            <Link href="/account" className="no-underline hover:text-signal">
              {t("account")}
            </Link>
          ) : (
            <Link href="/login" className="no-underline hover:text-signal">
              {t("login")}
            </Link>
          )}
          <button
            type="button"
            onClick={() => switchLocale(locale === "en" ? "no" : "en")}
            className="rounded-sm border border-ink/30 px-2 py-0.5 text-xs uppercase tracking-wide text-ink hover:border-signal hover:text-signal"
          >
            {locale === "en" ? "NO" : "EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}
