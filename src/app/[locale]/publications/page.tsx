import { getTranslations, setRequestLocale } from "next-intl/server";
import { listPublications } from "@/lib/publications";
import { PublicationRow } from "@/components/PublicationRow";

type Props = { params: Promise<{ locale: string }> };

export default async function PublicationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("publications");
  const items = listPublications();

  return (
    <div className="space-y-8">
      <header className="max-w-3xl space-y-3 border-b border-fog pb-8">
        <h1 className="font-serif text-4xl">{t("title")}</h1>
        <p className="text-lg leading-relaxed text-steel">{t("intro")}</p>
      </header>
      <div>
        {items.map((item) => (
          <PublicationRow key={item.slug} item={item} locale={locale} />
        ))}
      </div>
    </div>
  );
}
