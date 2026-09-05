export type Person = {
  slug: string;
  name: string;
  role: { en: string; no: string };
  bio: { en: string; no: string };
  founder?: boolean;
};

/** Public people only. Add names when real colleagues join. Never invent staff. */
export const PEOPLE: Person[] = [
  {
    slug: "erik-dale",
    name: "Erik Dale",
    role: { en: "Founder", no: "Grunnlegger" },
    bio: {
      en: "European strategy, sovereignty and civilizational renewal. Public face of Kongeriket.",
      no: "Europeisk strategi, suverenitet og sivilisatorisk fornyelse. Kongerikets offentlige ansikt.",
    },
    founder: true,
  },
];

export function listPeople() {
  return PEOPLE;
}
