#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from pathlib import Path
import json, shutil

ROOT = Path("/workspace/kongeriket-site")

def w(rel: str, content: str) -> None:
    p = ROOT / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content, encoding="utf-8")

# Remove conflicting leftover
ss = ROOT / "src/components/SiteShell.tsx"
if ss.exists():
    ss.unlink()

# --- messages ---
en = {
  "Meta": {"siteName": "Kongeriket", "tagline": "Credibility and courage in public language.", "homeTitle": "Kongeriket", "homeDescription": "Independent research and early briefs from Kongeriket."},
  "Nav": {"home": "Home", "about": "About", "research": "Research", "briefs": "Briefs", "contact": "Contact", "subscribe": "Subscribe", "login": "Log in", "account": "Account", "members": "Members", "signOut": "Sign out"},
  "Home": {"eyebrow": "Phase 1", "title": "Read carefully. Speak plainly.", "lead": "Kongeriket is building a small public practice for research and briefs that prefer evidence over heat.", "ctaBriefs": "Read early briefs", "ctaSubscribe": "Join the list", "note": "We are early. Membership today means the public list plus early briefs, not a finished archive."},
  "About": {"title": "About", "p1": "Kongeriket is a Norwegian project for careful public writing on power, institutions, and the stories they tell.", "p2": "We aim for credibility and courage. That means naming uncertainty, showing method, and refusing theatrical certainty.", "p3": "Phase 1 is public scaffolding: pages, a list, and a few early briefs. The work will deepen. The claims will stay accountable."},
  "Research": {"title": "Research", "lead": "Research here means slow reading of public claims, documents, and incentives.", "p1": "We do not ship a finished library in Phase 1. What you see is the start of a method: ask what a statement protects, what it postpones, and what would falsify it.", "p2": "Later phases will publish longer notes. For now, treat Research as orientation, not a catalog."},
  "Briefs": {"title": "Briefs", "lead": "Short public and early member notes. Thin on purpose.", "public": "Public", "members": "Members", "empty": "No briefs yet.", "read": "Read", "locked": "Members"},
  "Brief": {"back": "All briefs", "membersOnly": "Members early access", "loginPrompt": "This brief is in the early member stream. Log in with the demo magic link to read it."},
  "Contact": {"title": "Contact", "lead": "Write when you have a precise question or a correction.", "general": "General", "editor": "Editor", "note": "Addresses are listed as text only for now. A form comes later."},
  "Subscribe": {"title": "Subscribe", "lead": "Join the public list for new briefs and project notes.", "honest": "Honest scope: the list and early briefs. Not a full research vault.", "email": "Email", "submit": "Join the list", "success": "You are on the demo list. No email provider is wired yet; this confirms the flow.", "invalid": "Enter a valid email address."},
  "Login": {"title": "Log in", "lead": "Magic-link shaped demo. Enter any email to start a local session cookie. No message is sent.", "email": "Email", "submit": "Send magic link (demo)", "hint": "After you continue, Members and Account unlock for this browser."},
  "Account": {"title": "Account", "signedInAs": "Signed in as", "since": "Session started", "gate": "Sign in to view your account.", "demoNote": "This is a demo session cookie, not production auth."},
  "Members": {"title": "Members", "lead": "Early access area. Content is limited on purpose.", "honest": "Membership in Phase 1 means the public list plus early briefs only. There is no hidden finished archive.", "gate": "Sign in to open the members area.", "ctaLogin": "Log in", "earlyTitle": "Early member briefs", "none": "No member briefs yet."},
  "Footer": {"rights": "Kongeriket", "phase": "Phase 1"},
  "Auth": {"required": "Sign in required"},
}
no = {
  "Meta": {"siteName": "Kongeriket", "tagline": "Troverdighet og mot i offentlig spr\u00e5k.", "homeTitle": "Kongeriket", "homeDescription": "Uavhengig forskning og tidlige brief fra Kongeriket."},
  "Nav": {"home": "Hjem", "about": "Om", "research": "Forskning", "briefs": "Brief", "contact": "Kontakt", "subscribe": "Bli med", "login": "Logg inn", "account": "Konto", "members": "Medlemmer", "signOut": "Logg ut"},
  "Home": {"eyebrow": "Fase 1", "title": "Les n\u00f8ye. Snakk rett.", "lead": "Kongeriket bygger en liten offentlig praksis for forskning og brief som foretrekker evidens framfor hete.", "ctaBriefs": "Les tidlige brief", "ctaSubscribe": "Bli med p\u00e5 listen", "note": "Vi er tidlig ute. Medlemskap i dag betyr den offentlige listen pluss tidlige brief, ikke et ferdig arkiv."},
  "About": {"title": "Om", "p1": "Kongeriket er et norsk prosjekt for n\u00f8ye offentlig skriving om makt, institusjoner og historiene de forteller.", "p2": "Vi sikter mot troverdighet og mot. Det betyr \u00e5 navngi usikkerhet, vise metode, og avsl\u00e5 teatralsk sikkerhet.", "p3": "Fase 1 er offentlig stillas: sider, en liste, og noen tidlige brief. Arbeidet skal bli dypere. P\u00e5standene skal forbli etterpr\u00f8vbare."},
  "Research": {"title": "Forskning", "lead": "Forskning her betyr langsom lesing av offentlige p\u00e5stander, dokumenter og incentiver.", "p1": "Vi leverer ikke et ferdig bibliotek i fase 1. Det du ser er starten p\u00e5 en metode: sp\u00f8r hva en uttalelse beskytter, hva den utsetter, og hva som ville falsifisere den.", "p2": "Senere faser publiserer lengre notater. For n\u00e5: orientering, ikke katalog."},
  "Briefs": {"title": "Brief", "lead": "Korte offentlige og tidlige medlemsnotater. Tynne med vilje.", "public": "Offentlig", "members": "Medlemmer", "empty": "Ingen brief enn\u00e5.", "read": "Les", "locked": "Medlemmer"},
  "Brief": {"back": "Alle brief", "membersOnly": "Tidlig medlemstilgang", "loginPrompt": "Denne briefen er i den tidlige medlemsstr\u00f8mmen. Logg inn med demo-magilenken for \u00e5 lese."},
  "Contact": {"title": "Kontakt", "lead": "Skriv n\u00e5r du har et presist sp\u00f8rsm\u00e5l eller en rettelse.", "general": "Generelt", "editor": "Redakt\u00f8r", "note": "Adresser listes som tekst inntil videre. Skjema kommer senere."},
  "Subscribe": {"title": "Bli med", "lead": "Bli med p\u00e5 den offentlige listen for nye brief og prosjektnotater.", "honest": "\u00c6rlig omfang: listen og tidlige brief. Ikke et fullt forskningshvelv.", "email": "E-post", "submit": "Bli med p\u00e5 listen", "success": "Du er p\u00e5 demo-listen. Ingen e-postleverand\u00f8r er koblet enn\u00e5; dette bekrefter flyten.", "invalid": "Skriv inn en gyldig e-postadresse."},
  "Login": {"title": "Logg inn", "lead": "Magilenke-formet demo. Skriv inn hvilken som helst e-post for \u00e5 starte en lokal \u00f8kt-informasjonskapsel. Ingen melding sendes.", "email": "E-post", "submit": "Send magilenke (demo)", "hint": "Etter at du fortsetter, l\u00e5ses Medlemmer og Konto opp i denne nettleseren."},
  "Account": {"title": "Konto", "signedInAs": "Innlogget som", "since": "\u00d8kt startet", "gate": "Logg inn for \u00e5 se kontoen din.", "demoNote": "Dette er en demo-\u00f8kt-informasjonskapsel, ikke produksjonsautentisering."},
  "Members": {"title": "Medlemmer", "lead": "Tidlig tilgangsomr\u00e5de. Innholdet er begrenset med vilje.", "honest": "Medlemskap i fase 1 betyr den offentlige listen pluss tidlige brief. Det finnes ikke et skjult ferdig arkiv.", "gate": "Logg inn for \u00e5 \u00e5pne medlemsomr\u00e5det.", "ctaLogin": "Logg inn", "earlyTitle": "Tidlige medlemsbrief", "none": "Ingen medlemsbrief enn\u00e5."},
  "Footer": {"rights": "Kongeriket", "phase": "Fase 1"},
  "Auth": {"required": "Innlogging kreves"},
}
# decode unicode escapes in no via json roundtrip
no = json.loads(json.dumps(no).encode().decode("unicode_escape").encode("latin1").decode("utf-8") if False else json.dumps(no))
# simpler: use ensure_ascii and write via dumps which handles \u
w("messages/en.json", json.dumps(en, ensure_ascii=False, indent=2) + "\n")
w("messages/no.json", json.dumps(no, ensure_ascii=False, indent=2).encode("utf-8").decode("unicode_escape") + "\n" if "\\u" in json.dumps(no) else json.dumps(no, ensure_ascii=False, indent=2) + "\n")
# Actually no already has real escapes as \\u in source string - json.dumps will keep them as literal backslash-u OR we need loads
no_real = json.loads(json.dumps(no).replace("\\\\u", "\\u"))
# Easiest path:
no_text = json.dumps(no, ensure_ascii=True, indent=2)
no_real = json.loads(no_text)  # converts \uXXXX to chars when loading ensure_ascii True dumps
w("messages/no.json", json.dumps(no_real, ensure_ascii=False, indent=2) + "\n")

print("messages written")
print("PARTIAL - continue in next section")
