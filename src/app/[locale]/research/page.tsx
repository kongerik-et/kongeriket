import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function ResearchPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("research");
  const seats = t.raw("seats") as { slug: string; name: string; blurb: string }[];
  const ladder = t.raw("ladder") as { name: string; blurb: string }[];

  return (
    <div className="space-y-14">
      <header className="max-w-3xl space-y-4">
        <h1 className="font-serif text-4xl">{t("title")}</h1>
        <p className="text-lg leading-relaxed text-steel">{t("intro")}</p>
      </header>

      <section className="space-y-6">
        <h2 className="font-serif text-2xl">{t("ladderTitle")}</h2>
        <p className="max-w-2xl text-steel">{t("ladderIntro")}</p>
        <ul className="divide-y divide-fog border-y border-fog">
          {ladder.map((rung) => (
            <li key={rung.name} className="grid gap-2 py-5 md:grid-cols-[12rem_1fr]">
              <p className="text-sm font-medium uppercase tracking-widest text-signal">{rung.name}</p>
              <p className="text-steel">{rung.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-serif text-2xl">{t("seatsTitle")}</h2>
        <p className="max-w-2xl text-steel">{t("seatsIntro")}</p>
        <ul className="grid gap-4 md:grid-cols-3">
          {seats.map((seat) => (
            <li key={seat.slug} className="border border-fog p-5">
              <h3 className="font-serif text-xl">{seat.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{seat.blurb}</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-fog">{t("stub")}</p>
            </li>
          ))}
        </ul>
        <Link href="/publications" className="inline-block text-sm text-steel no-underline hover:text-ink">
          {t("toPublications")}
        </Link>
      </section>
    </div>
  );
}
