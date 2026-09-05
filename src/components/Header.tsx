"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

const links = [
  { href: "/about" as const, key: "about" as const },
  { href: "/research" as const, key: "research" as const },
  { href: "/briefs" as const, key: "briefs" as const },
  { href: "/members" as const, key: "members" as const },
  { href: "/subscribe" as const, key: "subscribe" as const },
  { href: "/contact" as const, key: "contact" as const },
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
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-5">
        <Link href="/" className="font-serif text-xl tracking-tight no-underline hover:text-ink">
          Kongeriket
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-steel">
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
        </nav>
        <div className="flex items-center gap-2 text-sm">
          <button
            type="button"
            onClick={() => switchLocale(locale === "en" ? "no" : "en")}
            className="uppercase text-steel hover:text-ink"
          >
            {locale === "en" ? "no" : "en"}
          </button>
        </div>
      </div>
    </header>
  );
}
