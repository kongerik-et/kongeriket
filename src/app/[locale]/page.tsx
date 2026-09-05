import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const meta = await getTranslations("meta");
  const briefs = await getTranslations("briefs");
  const nav = await getTranslations("nav");

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-widest text-steel">Kongeriket</p>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{meta("line")}</h1>
        <p className="max-w-2xl text-lg text-steel">{t("cta")}</p>
        <Link
          href="/subscribe"
          className="inline-block rounded-sm bg-signal px-4 py-2 text-paper no-underline hover:opacity-90 hover:text-paper"
        >
          {t("subscribeCta")}
        </Link>
      </section>
      <section className="grid gap-6 border-t border-fog pt-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl">{t("missionTitle")}</h2>
          <p className="mt-3 leading-relaxed text-steel">{t("mission")}</p>
          <Link href="/about" className="mt-4 inline-block text-sm">
            {nav("about")}
          </Link>
        </div>
        <div className="rounded-sm border border-fog p-6">
          <p className="text-sm uppercase tracking-widest text-steel">{t("latest")}</p>
          <h3 className="mt-2 font-serif text-xl">{briefs("sampleTitle")}</h3>
          <p className="mt-2 text-sm text-steel">{briefs("sampleDate")}</p>
          <p className="mt-3 leading-relaxed">{briefs("sampleExcerpt")}</p>
          <Link href="/briefs" className="mt-4 inline-block text-sm">
            {t("readBrief")}
          </Link>
        </div>
      </section>
    </div>
  );
}
