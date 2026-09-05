import type { PubType } from "@/lib/publications";

const LABELS: Record<PubType, { en: string; no: string }> = {
  analysis: { en: "Analysis", no: "Analyse" },
  brief: { en: "Brief", no: "Brief" },
  paper: { en: "Paper", no: "Paper" },
  state: { en: "State of Europe", no: "State of Europe" },
  podcast: { en: "Podcast", no: "Podcast" },
};

export function TypeBadge({
  type,
  locale,
}: {
  type: PubType;
  locale: string;
}) {
  const loc = locale === "no" ? "no" : "en";
  return (
    <span className="text-xs font-medium uppercase tracking-[0.12em] text-signal">
      {LABELS[type][loc]}
    </span>
  );
}
