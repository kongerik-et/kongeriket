import { getTranslations, setRequestLocale } from "next-intl/server";
import { isSignedIn } from "@/lib/auth";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function BriefsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("briefs");
  const nav = await getTranslations("nav");
  const signedIn = await isSignedIn();

  return (
    <div className="max-w-3xl space-y-8">
      <div className="space-y-3">
        <h1 className="font-serif text-4xl">{t("title")}</h1>
        <p className="text-lg text-steel">{t("intro")}</p>
      </div>
      <article className="border border-fog p-6">
        <p className="text-sm text-steel">{t("sampleDate")}</p>
        <h2 className="mt-2 font-serif text-2xl">{t("sampleTitle")}</h2>
        <p className="mt-4 leading-relaxed">{t("sampleExcerpt")}</p>
      </article>
      <p className="text-sm text-steel">{t("membersNote")}</p>
      {!signedIn ? (
        <Link href="/subscribe" className="inline-block text-sm">
          {nav("subscribe")}
        </Link>
      ) : null}
    </div>
  );
}
