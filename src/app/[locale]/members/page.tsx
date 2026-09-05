import { getTranslations, setRequestLocale } from "next-intl/server";
import { isSignedIn } from "@/lib/auth";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function MembersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("members");
  const nav = await getTranslations("nav");
  const signedIn = await isSignedIn();

  if (!signedIn) {
    return (
      <div className="space-y-4">
        <h1 className="font-serif text-4xl">{t("title")}</h1>
        <p className="text-steel">{t("needLogin")}</p>
        <Link href="/login">{nav("login")}</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="font-serif text-4xl">{t("title")}</h1>
      <p className="text-lg text-steel">{t("intro")}</p>
      <div className="border border-fog p-6 text-steel">{t("empty")}</div>
    </div>
  );
}
