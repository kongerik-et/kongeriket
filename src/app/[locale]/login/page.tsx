import { getTranslations, setRequestLocale } from "next-intl/server";
import { LoginForm } from "@/components/LoginForm";

type Props = { params: Promise<{ locale: string }> };

export default async function LoginPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("login");

  return (
    <div className="space-y-6">
      <div className="max-w-2xl space-y-3">
        <h1 className="font-serif text-4xl">{t("title")}</h1>
        <p className="text-lg text-steel">{t("intro")}</p>
      </div>
      <LoginForm emailLabel={t("email")} submitLabel={t("submit")} hint={t("sent")} />
    </div>
  );
}
