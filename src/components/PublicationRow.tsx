import { Link } from "@/i18n/navigation";
import { TypeBadge } from "@/components/TypeBadge";
import type { Publication } from "@/lib/publications";

function formatDate(iso: string, locale: string) {
  const d = new Date(iso + "T12:00:00Z");
  return d.toLocaleDateString(locale === "no" ? "nb-NO" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function PublicationRow({
  item,
  locale,
}: {
  item: Publication;
  locale: string;
}) {
  const loc = locale === "no" ? "no" : "en";
  const inner = (
    <article className="group grid gap-3 border-b border-fog py-8 md:grid-cols-[7rem_1fr] md:gap-8">
      <div className="text-sm text-steel">{formatDate(item.date, locale)}</div>
      <div className="min-w-0 space-y-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <TypeBadge type={item.type} locale={locale} />
          {item.comingSoon ? (
            <span className="text-xs uppercase tracking-widest text-steel">
              {locale === "no" ? "Kommer" : "Coming"}
            </span>
          ) : null}
          {item.stub && !item.comingSoon ? (
            <span className="text-xs uppercase tracking-widest text-steel">
              {locale === "no" ? "Utkast" : "Stub"}
            </span>
          ) : null}
        </div>
        <h2 className="font-serif text-2xl leading-snug text-ink group-hover:text-signal md:text-[1.65rem]">
          {item.title[loc]}
        </h2>
        <p className="max-w-2xl text-[1.05rem] leading-relaxed text-steel">{item.dek[loc]}</p>
        <p className="text-sm text-steel">{item.author}</p>
        <ul className="flex flex-wrap gap-2 pt-1">
          {item.tags[loc].map((tag) => (
            <li key={tag} className="text-xs text-steel">
              #{tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );

  if (item.comingSoon) {
    return <div className="opacity-80">{inner}</div>;
  }

  return (
    <Link
      href={{ pathname: "/publications/[slug]", params: { slug: item.slug } }}
      className="block no-underline"
    >
      {inner}
    </Link>
  );
}
