import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export default async function ResearchPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("research");
  const seats = t.raw("seats") as { slug: string; name: string; blurb: string }[];

  return (
    <div className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <h1 className="font-serif text-4xl">{t("title")}</h1>
        <p className="text-lg text-steel">{t("intro")}</p>
      </div>
      <ul className="grid gap-4 md:grid-cols-3">
        {seats.map((seat) => (
          <li key={seat.slug} className="border border-fog p-5">
            <h2 className="font-serif text-xl">{seat.name}</h2>
            <p className="mt-2 text-sm text-steel">{seat.blurb}</p>
            <p className="mt-4 text-xs uppercase tracking-widest text-fog">{t("stub")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
