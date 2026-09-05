export type Brief = {
  slug: string;
  date: string;
  memberOnly: boolean;
  title: { en: string; no: string };
  summary: { en: string; no: string };
  body: { en: string[]; no: string[] };
};

export const BRIEFS: Brief[] = [
  {
    slug: "norway-as-early-warning",
    date: "2026-09-05",
    memberOnly: false,
    title: {
      en: "Norway as early warning",
      no: "Norge som tidlig varsel",
    },
    summary: {
      en: "Norway is not finished. It is early. Trends visible here preview pressures already harder elsewhere in Western Europe.",
      no: "Norge er ikke ferdig. Det er tidlig. Trender synlige her er et forvarsel om press som allerede er hardere andre steder i Vest-Europa.",
    },
    body: {
      en: [
        "Public debate often treats Norway as settled. That is the wrong frame. The country is early in several pressures that are further along elsewhere.",
        "This sample brief is public on purpose. Phase 1 membership means the list plus early briefs as we publish them, not a finished vault.",
        "Read it as orientation: credibility before volume, method before spectacle.",
      ],
      no: [
        "Offentlig debatt behandler ofte Norge som ferdig avklart. Det er feil ramme. Landet er tidlig inne i flere trykk som er lengre kommet andre steder.",
        "Denne eksempelbriefen er offentlig med vilje. Fase 1-medlemskap betyr listen pluss tidlige brief etter hvert som vi publiserer, ikke et ferdig hvelv.",
        "Les den som orientering: troverdighet for volum, metode for spektakel.",
      ],
    },
  },
  {
    slug: "reading-power-quietly",
    date: "2026-08-28",
    memberOnly: true,
    title: {
      en: "Reading power without noise",
      no: "Å lese makt uten støy",
    },
    summary: {
      en: "Early member note on method: separate signal from spectacle when institutions talk.",
      no: "Tidlig medlemsnotat om metode: skill signal fra spektakel når institusjoner snakker.",
    },
    body: {
      en: [
        "This brief sits in the early member stream. Short on purpose. Method before volume.",
        "When public language grows loud, we slow down and ask what is protected, deferred, or unfalsifiable.",
      ],
      no: [
        "Denne briefen sitter i den tidlige medlemsstrømmen. Kort med vilje. Metode for volum.",
        "Når språket blir høyt, setter vi farten ned og spør hva som beskyttes, utsettes eller ikke kan falsifiseres.",
      ],
    },
  },
];

export function getBrief(slug: string) {
  return BRIEFS.find((b) => b.slug === slug);
}

export function listAllBriefs() {
  return BRIEFS;
}
