import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { listPublications } from "@/lib/publications";
import { PublicationRow } from "@/components/PublicationRow";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const meta = await getTranslations("meta");
  const items = listPublications().slice(0, 6);

  return (
    <div className="space-y-12">
      <section className="max-w-3xl space-y-5 border-b border-fog pb-12">
        <p className="text-xs uppercase tracking-[0.18em] text-steel">{t("kicker")}</p>
        <h1 className="font-serif text-4xl leading-[1.15] md:text-5xl">{meta("line")}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-steel">{t("lede")}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/subscribe"
            className="inline-block rounded-sm bg-signal px-4 py-2 text-sm text-paper no-underline hover:opacity-90 hover:text-paper"
          >
            {t("subscribeCta")}
          </Link>
          <Link href="/about" className="inline-block self-center text-sm text-steel no-underline hover:text-ink">
            {t("aboutLink")}
          </Link>
        </div>
      </section>

      <section className="space-y-2">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl">{t("feedTitle")}</h2>
          <Link href="/publications" className="text-sm text-steel no-underline hover:text-ink">
            {t("allPublications")}
          </Link>
        </div>
        <p className="max-w-2xl text-sm text-steel">{t("feedNote")}</p>
        <div className="mt-2">
          {items.map((item) => (
            <PublicationRow key={item.slug} item={item} locale={locale} />
          ))}
        </div>
      </section>
    </div>
  );
}
