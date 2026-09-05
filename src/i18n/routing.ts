import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "no"],
  defaultLocale: "en",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/about": { en: "/about", no: "/om" },
    "/team": { en: "/team", no: "/lag" },
    "/research": { en: "/research", no: "/forskning" },
    "/publications": { en: "/publications", no: "/publikasjoner" },
    "/publications/[slug]": {
      en: "/publications/[slug]",
      no: "/publikasjoner/[slug]",
    },
    "/briefs": { en: "/briefs", no: "/brief" },
    "/contact": { en: "/contact", no: "/kontakt" },
    "/subscribe": { en: "/subscribe", no: "/bli-med" },
    "/login": { en: "/login", no: "/logg-inn" },
    "/account": { en: "/account", no: "/konto" },
    "/members": { en: "/members", no: "/medlemmer" },
  },
});
