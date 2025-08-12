# MOMA1890 — AI-ready, multilingual direct-booking site

## Local dev
```bash
npm i
cp .env.example .env # fill SITE_URL and booking URLs
npm run dev
```

## Deploy (Vercel recommended)
1) Push this repo to GitHub.
2) In Vercel, **New Project** → import the repo.
3) Add ENV vars from `.env.example` (SITE_URL, BOOKING_PRIMARY, etc.).
4) Deploy. Ensure the generated routes `/en`, `/de`, `/es`, `/fr` work.
5) Optional: point `www`/apex DNS to Vercel.

## Wiring MEWS (availability/reserve)
Replace the mocked handlers in `app/api/availability/route.ts` and `app/api/reserve/route.ts`
with real MEWS calls using your:
- `MEWS_API_URL`
- `MEWS_CLIENT_TOKEN`
- `MEWS_CLIENT_ID`
- `MEWS_PROPERTY_ID`

Then update `public/.well-known/openapi.yaml` to match your live API URLs.

## AI & SEO
- `public/robots.txt`, `public/sitemap.xml`, `public/ai.txt`, `public/.well-known/ai-plugin.json`, `public/.well-known/openapi.yaml`
- JSON-LD injected on each localized homepage via `lib/jsonld.ts`

## Multilingual
- Locale-prefixed routes: `/en`, `/de`, `/es`, `/fr`
- Copy lives in `messages/<locale>.json`
