import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const paragraphs = t("body").split("\n\n");

  return (
    <article className="max-w-3xl space-y-6 border-l-4 border-signal pl-5 md:pl-7">
      <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">{t("title")}</h1>
      {paragraphs.map((para) => (
        <p key={para.slice(0, 32)} className="text-lg leading-snug text-ink/90 md:text-xl md:leading-snug">
          {para}
        </p>
      ))}
      <p className="pt-2">
        <Link
          href="/team"
          className="border-b border-signal text-sm font-medium text-ink no-underline hover:text-signal"
        >
          {t("teamLink")}
        </Link>
      </p>
    </article>
  );
}
