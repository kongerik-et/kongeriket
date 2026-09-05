import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getPublication, listPublications } from "@/lib/publications";
import { TypeBadge } from "@/components/TypeBadge";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return listPublications()
    .filter((p) => !p.comingSoon)
    .map((p) => ({ slug: p.slug }));
}

export default async function PublicationPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const item = getPublication(slug);
  if (!item || item.comingSoon) notFound();

  const t = await getTranslations("publications");
  const loc = locale === "no" ? "no" : "en";
  const date = new Date(item.date + "T12:00:00Z").toLocaleDateString(
    locale === "no" ? "nb-NO" : "en-GB",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <article className="mx-auto max-w-2xl space-y-6">
      <Link href="/publications" className="text-sm text-steel no-underline hover:text-ink">
        {t("back")}
      </Link>
      <div className="space-y-3 border-b border-fog pb-6">
        <TypeBadge type={item.type} locale={locale} />
        <h1 className="font-serif text-4xl leading-tight">{item.title[loc]}</h1>
        <p className="text-sm text-steel">
          {item.author} · {date}
        </p>
        <p className="text-lg leading-relaxed text-steel">{item.dek[loc]}</p>
      </div>
      {item.stub ? (
        <p className="leading-relaxed text-steel">{t("stubBody")}</p>
      ) : (
        <p className="leading-relaxed">{item.dek[loc]}</p>
      )}
    </article>
  );
}
