import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="font-serif text-4xl">{t("title")}</h1>
      <p className="text-lg text-steel">{t("intro")}</p>
      <dl className="space-y-4 border border-fog p-6">
        <div>
          <dt className="text-sm uppercase tracking-widest text-steel">{t("general")}</dt>
          <dd className="mt-1 font-serif text-xl">contact@kongerik.et</dd>
        </div>
        <div>
          <dt className="text-sm uppercase tracking-widest text-steel">{t("erik")}</dt>
          <dd className="mt-1 font-serif text-xl">erik@kongerik.et</dd>
        </div>
      </dl>
    </div>
  );
}
