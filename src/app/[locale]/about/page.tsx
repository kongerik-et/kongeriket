import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const paragraphs = t("body").split("\n\n");

  return (
    <article className="max-w-3xl space-y-6">
      <h1 className="font-serif text-4xl">{t("title")}</h1>
      {paragraphs.map((para) => (
        <p key={para.slice(0, 32)} className="text-lg leading-relaxed">
          {para}
        </p>
      ))}
    </article>
  );
}
