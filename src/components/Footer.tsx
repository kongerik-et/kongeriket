import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("footer");
  return (
    <footer className="mt-auto border-t border-fog">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-steel">
        <p className="font-serif text-ink">Kongeriket</p>
        <p>{t("tag")}</p>
        <p>
          <span className="mr-2">{t("later")}:</span>
          {t("papers")} · {t("podcast")} · {t("events")} · {t("privacy")}
        </p>
      </div>
    </footer>
  );
}
