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
  featured = false,
}: {
  item: Publication;
  locale: string;
  featured?: boolean;
}) {
  const loc = locale === "no" ? "no" : "en";
  const titleClass = featured
    ? "font-serif text-3xl leading-[1.12] tracking-tight text-ink group-hover:text-signal md:text-4xl"
    : "font-serif text-2xl leading-snug tracking-tight text-ink group-hover:text-signal md:text-[1.7rem]";
  const inner = (
    <article
      className={
        featured
          ? "group grid gap-3 border-b-2 border-ink bg-ink/[0.03] py-7 md:grid-cols-[7.5rem_1fr] md:gap-8 md:border-l-4 md:border-l-signal md:pl-6"
          : "group grid gap-2 border-b border-fog py-6 md:grid-cols-[7.5rem_1fr] md:gap-8"
      }
    >
      <div className="text-sm font-medium text-steel">{formatDate(item.date, locale)}</div>
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
        <h2 className={titleClass}>{item.title[loc]}</h2>
        <p
          className={
            featured
              ? "max-w-2xl text-lg leading-snug text-ink/80"
              : "max-w-2xl text-[1.05rem] leading-snug text-steel"
          }
        >
          {item.dek[loc]}
        </p>
        <p className="text-sm font-medium text-ink">{item.author}</p>
        <ul className="flex flex-wrap gap-2 pt-0.5">
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
    return <div className="opacity-75">{inner}</div>;
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
