export type PubType = "analysis" | "brief" | "paper" | "state" | "podcast";

export type Publication = {
  slug: string;
  type: PubType;
  date: string;
  author: string;
  title: { en: string; no: string };
  dek: { en: string; no: string };
  tags: { en: string[]; no: string[] };
  stub?: boolean;
  comingSoon?: boolean;
};

export const PUBLICATIONS: Publication[] = [
  {
    slug: "norway-as-early-warning",
    type: "brief",
    date: "2026-09-05",
    author: "Erik Dale",
    title: {
      en: "Norway as early warning",
      no: "Norge som tidlig varsel",
    },
    dek: {
      en: "Norway is not finished. It is early. Trends visible here preview pressures already harder elsewhere in Western Europe.",
      no: "Norge er ikke ferdig. Det er tidlig. Trender synlige her forhåndsviser press som allerede er hardere andre steder i Vest-Europa.",
    },
    tags: {
      en: ["Norway", "demography", "early warning"],
      no: ["Norge", "demografi", "tidlig varsel"],
    },
  },
  {
    slug: "what-holding-the-line-means",
    type: "analysis",
    date: "2026-09-01",
    author: "Erik Dale",
    title: {
      en: "What holding the line means",
      no: "Hva det betyr å holde linjen",
    },
    dek: {
      en: "Eastern and Central Europe are not a museum of the past. They are the present test of whether Europe still means a people that can decide.",
      no: "Øst- og Sentral-Europa er ikke et museum. De er dagens test på om Europa fortsatt betyr et folk som kan bestemme.",
    },
    tags: {
      en: ["sovereignty", "Central Europe"],
      no: ["suverenitet", "Sentral-Europa"],
    },
    stub: true,
  },
  {
    slug: "state-of-europe-sample",
    type: "state",
    date: "2026-08-20",
    author: "Erik Dale",
    title: {
      en: "State of Europe (sample frame)",
      no: "State of Europe (eksempelramme)",
    },
    dek: {
      en: "A recurring ledger of hard facts: demography, cohesion, borders, capacity. This entry is a frame, not a finished report.",
      no: "Et tilbakevendende regnskap over harde fakta: demografi, samhold, grenser, kapasitet. Denne posten er en ramme, ikke en ferdig rapport.",
    },
    tags: {
      en: ["State of Europe", "method"],
      no: ["State of Europe", "metode"],
    },
    stub: true,
  },
  {
    slug: "civilization-without-euphemism",
    type: "paper",
    date: "2026-08-01",
    author: "Erik Dale",
    title: {
      en: "Civilization without euphemism",
      no: "Sivilisasjon uten eufemismer",
    },
    dek: {
      en: "Longer argument forthcoming. Placeholder in the ladder so the shelf is honest about what a paper is for.",
      no: "Lengre argument kommer. Plassholder i stigen, så hyllen er ærlig om hva en paper er til for.",
    },
    tags: {
      en: ["civilization", "voice"],
      no: ["sivilisasjon", "stemme"],
    },
    stub: true,
    comingSoon: true,
  },
  {
    slug: "podcast-coming",
    type: "podcast",
    date: "2026-07-15",
    author: "Erik Dale",
    title: {
      en: "Podcast (coming)",
      no: "Podcast (kommer)",
    },
    dek: {
      en: "Audio will follow the briefs, not the other way around. No fake episode count.",
      no: "Lyd følger briefene, ikke omvendt. Ingen falsk episodetelling.",
    },
    tags: {
      en: ["podcast"],
      no: ["podcast"],
    },
    stub: true,
    comingSoon: true,
  },
];

export function listPublications() {
  return [...PUBLICATIONS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPublication(slug: string) {
  return PUBLICATIONS.find((p) => p.slug === slug);
}
