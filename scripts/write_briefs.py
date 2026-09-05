
from pathlib import Path
content = """export type Brief = {
  slug: string;
  date: string;
  memberOnly: boolean;
  title: { en: string; no: string };
  summary: { en: string; no: string };
  body: { en: string[]; no: string[] };
};

export const BRIEFS: Brief[] = [
  {
    slug: \"north-night-signal\",
    date: \"2026-08-12\",
    memberOnly: false,
    title: {
      en: \"North Night: a first signal\",
      no: \"North Night: et f\u00f8rste signal\",
    },
    summary: {
      en: \"Why Kongeriket starts with restraint, not volume, and what early readers should expect.\",
      no: \"Hvorfor Kongeriket starter med tilbakeholdenhet, ikke volum, og hva tidlige lesere b\u00f8r forvente.\",
    },
    body: {
      en: [
        \"Kongeriket exists to make hard questions readable without softening them. Phase 1 is deliberately thin: a public list, a few early briefs, and a clear door for people who want to follow the work as it takes shape.\",
        \"We will not pretend there is a finished library behind the gate. Membership today means early access to what we publish next, not a vault of finished research.\",
        \"If that honesty matches how you want to read, stay close. If you need a completed archive first, wait. Both choices are sound.\",
      ],
      no: [
        \"Kongeriket finnes for \u00e5 gj\u00f8re vanskelige sp\u00f8rsm\u00e5l lesbare uten \u00e5 myke dem opp. Fase 1 er bevisst tynn: en offentlig liste, noen tidlige brief, og en klar d\u00f8r for dem som vil f\u00f8lge arbeidet mens det tar form.\",
        \"Vi later ikke som om det finnes et ferdig bibliotek bak porten. Medlemskap i dag betyr tidlig tilgang til det vi publiserer neste, ikke et hvelv av ferdig forskning.\",
        \"Hvis den \u00e6rligheten passer hvordan du vil lese, bli. Hvis du trenger et ferdig arkiv f\u00f8rst, vent. Begge valg er fornuftige.\",
      ],
    },
  },
  {
    slug: \"reading-power-quietly\",
    date: \"2026-08-28\",
    memberOnly: true,
    title: {
      en: \"Reading power without noise\",
      no: \"\u00c5 lese makt uten st\u00f8y\",
    },
    summary: {
      en: \"An early member note on method: how we separate signal from spectacle when institutions talk.\",
      no: \"Et tidlig medlemsnotat om metode: hvordan vi skiller signal fra spektakel n\u00e5r institusjoner snakker.\",
    },
    body: {
      en: [
        \"This brief is part of the early member stream. It is short on purpose. Method comes before volume.\",
        \"When public language grows loud, we slow down. We ask what is being protected, what is being deferred, and what evidence would change the claim.\",
        \"More will follow. For now, treat this as a stake in the ground, not a finished doctrine.\",
      ],
      no: [
        \"Denne briefen er del av den tidlige medlemsstr\u00f8mmen. Den er kort med vilje. Metode kommer f\u00f8r volum.\",
        \"N\u00e5r offentlig spr\u00e5k blir h\u00f8yt, setter vi farten ned. Vi sp\u00f8r hva som beskyttes, hva som utsettes, og hvilken evidens som ville endre p\u00e5standen.\",
        \"Mer kommer. For n\u00e5: en stake i bakken, ikke en ferdig doktrine.\",
      ],
    },
  },
];

export function getBrief(slug: string): Brief | undefined {
  return BRIEFS.find((b) => b.slug === slug);
}

export function listPublicBriefs(): Brief[] {
  return BRIEFS.filter((b) => !b.memberOnly);
}

export function listAllBriefs(): Brief[] {
  return BRIEFS;
}
"""
Path("/workspace/kongeriket-site/src/lib/briefs.ts").write_text(content)
print("ok")
