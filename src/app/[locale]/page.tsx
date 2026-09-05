import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { listPublications } from "@/lib/publications";
import { PublicationRow } from "@/components/PublicationRow";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const items = listPublications();
  const lead = items[0];
  const rest = items.slice(1, 5);

  return (
    <div className="space-y-10">
      <section className="relative space-y-5 border-l-4 border-signal pl-5 md:pl-7">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-signal">{t("kicker")}</p>
        <h1 className="max-w-4xl font-serif text-[2.6rem] leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-[4.15rem]">
          {t("headline")}
        </h1>
        <p className="max-w-2xl text-lg leading-snug text-ink md:text-xl md:leading-snug">{t("lede")}</p>
        <p className="max-w-2xl text-base font-medium text-steel">{t("founder")}</p>
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <Link
            href="/subscribe"
            className="inline-block rounded-sm bg-signal px-5 py-3 text-sm font-medium tracking-wide text-paper no-underline hover:opacity-90 hover:text-paper"
          >
            {t("subscribeCta")}
          </Link>
          <Link
            href="/about"
            className="inline-block self-center border-b border-signal text-sm font-medium text-ink no-underline hover:text-signal"
          >
            {t("aboutLink")}
          </Link>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-ink/20 pb-3">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">{t("feedTitle")}</h2>
          <Link
            href="/publications"
            className="text-sm font-medium text-signal no-underline hover:opacity-80"
          >
            {t("allPublications")} →
          </Link>
        </div>
        <p className="max-w-2xl text-sm text-steel">{t("feedNote")}</p>
        {lead ? (
          <div className="pt-2">
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.16em] text-signal">
              {t("featuredLabel")}
            </p>
            <PublicationRow item={lead} locale={locale} featured />
          </div>
        ) : null}
        <div>
          {rest.map((item) => (
            <PublicationRow key={item.slug} item={item} locale={locale} />
          ))}
        </div>
      </section>

      <section className="border-t-2 border-ink pt-8">
        <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">{t("mission")}</p>
        <p className="mt-3 max-w-2xl text-base text-steel">{t("cta")}</p>
        <Link
          href="/subscribe"
          className="mt-5 inline-block rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper no-underline hover:bg-signal hover:text-paper"
        >
          {t("subscribeCta")}
        </Link>
      </section>
    </div>
  );
}
