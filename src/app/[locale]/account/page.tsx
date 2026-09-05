import { getTranslations, setRequestLocale } from "next-intl/server";
import { getDemoSession } from "@/lib/auth";
import { Link } from "@/i18n/navigation";
import { SignOutButton } from "@/components/SignOutButton";

type Props = { params: Promise<{ locale: string }> };

export default async function AccountPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("account");
  const nav = await getTranslations("nav");
  const session = await getDemoSession();

  if (!session) {
    return (
      <div className="space-y-4">
        <h1 className="font-serif text-4xl">{t("title")}</h1>
        <p className="text-steel">{t("needLogin")}</p>
        <Link href="/login">{nav("login")}</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="font-serif text-4xl">{t("title")}</h1>
      <p className="text-lg text-steel">{t("intro")}</p>
      <p className="text-sm text-steel">{session.email}</p>
      <SignOutButton label={nav("logout")} />
    </div>
  );
}
