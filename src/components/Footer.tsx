import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  return (
    <footer className="mt-auto border-t-2 border-ink">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-7 text-sm text-steel">
        <p className="font-serif text-xl text-ink">Kongeriket</p>
        <p className="max-w-xl text-ink/80">{t("tag")}</p>
        <p>
          <span className="mr-2">{t("later")}:</span>
          {t("papers")} · {t("podcast")} · {t("events")} · {t("privacy")}
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
          <Link href="/team" className="font-medium text-signal no-underline hover:opacity-80">
            {nav("team")}
          </Link>
          <Link href="/about" className="font-medium text-ink no-underline hover:text-signal">
            Erik Dale
          </Link>
        </p>
      </div>
    </footer>
  );
}
