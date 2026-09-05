import { getTranslations, setRequestLocale } from "next-intl/server";
import { SubscribeForm } from "@/components/SubscribeForm";

type Props = { params: Promise<{ locale: string }> };

export default async function SubscribePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("subscribe");

  return (
    <div className="space-y-8">
      <div className="max-w-2xl space-y-3">
        <h1 className="font-serif text-4xl">{t("title")}</h1>
        <p className="text-lg text-steel">{t("intro")}</p>
      </div>
      <SubscribeForm
        labels={{
          email: t("email"),
          name: t("name"),
          language: t("language"),
          consent: t("consent"),
          submit: t("submit"),
        }}
      />
    </div>
  );
}
