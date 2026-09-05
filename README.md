# Kongeriket (Phase 1)

Public Next.js site for Kongeriket: bilingual EN/NO research and early briefs.

## Stack

- Next.js 15 (App Router)
- next-intl (`/en`, `/no` + localized pathnames)
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- TypeScript
- Source Serif 4 + Inter (`next/font`)

## North Night palette

| Name   | Hex       |
|--------|-----------|
| Ink    | `#0B0F14` |
| Paper  | `#F4F1EA` |
| Steel  | `#5C6B7A` |
| Signal | `#8B1E1E` |
| Fog    | `#C8C2B6` |

## Develop

Dependencies are already installed in this workspace.

```bash
npm run dev --prefix /workspace/kongeriket-site
```

Open http://localhost:3000. Middleware sends you to `/en` or `/no`.

```bash
npm run build --prefix /workspace/kongeriket-site
npm run start --prefix /workspace/kongeriket-site
```

## Routes

| EN | NO |
|----|----|
| `/en` | `/no` |
| `/en/about` | `/no/om` |
| `/en/research` | `/no/forskning` |
| `/en/briefs` | `/no/brief` |
| `/en/briefs/[slug]` | `/no/brief/[slug]` |
| `/en/contact` | `/no/kontakt` |
| `/en/subscribe` | `/no/bli-med` |
| `/en/login` | `/no/logg-inn` |
| `/en/account` | `/no/konto` |
| `/en/members` | `/no/medlemmer` |

## Demo auth (magic-link shaped stub)

Phase 1 does **not** send email. The login form accepts any email and sets an httpOnly demo cookie (`kongeriket_demo_session`) so Members and Account UI can be exercised locally.

1. Open `/en/login` (or `/no/logg-inn`).
2. Enter any email and submit.
3. Cookie is set; you are sent to Members.
4. Sign out from Account clears the cookie.

Member copy is honest: list + early briefs only. No fake archive.

## Contact

Shown as text only on the contact page:

- contact@kongerik.et
- erik@kongerik.et

## Config notes

- `next.config.ts` wraps the app with `next-intl/plugin` pointing at `src/i18n/request.ts`.
- Locale middleware lives at `src/middleware.ts`.
- Messages: `messages/en.json`, `messages/no.json`.
