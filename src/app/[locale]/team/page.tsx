import { getTranslations, setRequestLocale } from "next-intl/server";
import { listPeople } from "@/lib/people";

type Props = { params: Promise<{ locale: string }> };

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("team");
  const loc = locale === "no" ? "no" : "en";
  const people = listPeople();

  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4 border-l-4 border-signal pl-5 md:pl-7">
        <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">{t("title")}</h1>
        <p className="max-w-2xl text-lg leading-snug text-ink/90">{t("intro")}</p>
      </header>

      <ul className="space-y-6">
        {people.map((person) => (
          <li
            key={person.slug}
            className="border-b border-fog pb-6 last:border-b-0"
          >
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-signal">
              {person.role[loc]}
            </p>
            <h2 className="mt-1 font-serif text-3xl tracking-tight text-ink">{person.name}</h2>
            <p className="mt-2 max-w-xl text-base leading-snug text-steel">{person.bio[loc]}</p>
          </li>
        ))}
      </ul>

      <section className="border-t-2 border-ink pt-8">
        <h2 className="font-serif text-2xl tracking-tight">{t("laterTitle")}</h2>
        <p className="mt-3 max-w-2xl text-base text-steel">{t("later")}</p>
      </section>
    </div>
  );
}
