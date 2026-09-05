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
    <header className="border-b border-fog">
      <div className="mx-auto flex max-w-5xl flex-wrap items-baseline justify-between gap-6 px-4 py-6">
        <div className="space-y-1">
          <Link href="/" className="font-serif text-[1.35rem] tracking-tight no-underline hover:text-ink">
            Kongeriket
          </Link>
          <p className="hidden max-w-sm text-xs leading-snug text-steel sm:block">{t("tagline")}</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-steel">
          {links.map((item) => (
            <Link key={item.key} href={item.href} className="no-underline hover:text-ink">
              {t(item.key)}
            </Link>
          ))}
          {signedIn ? (
            <Link href="/account" className="no-underline hover:text-ink">
              {t("account")}
            </Link>
          ) : (
            <Link href="/login" className="no-underline hover:text-ink">
              {t("login")}
            </Link>
          )}
          <button
            type="button"
            onClick={() => switchLocale(locale === "en" ? "no" : "en")}
            className="uppercase tracking-wide text-steel hover:text-ink"
          >
            {locale === "en" ? "NO" : "EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}
