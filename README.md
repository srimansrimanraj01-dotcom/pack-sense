<<<<<<< HEAD
# PackSense food-packaging decision-support website

PackSense is a responsive produce-packaging decision workspace. It combines a transparent rule-based recommendation engine, costed packaging-format comparisons, material and storage/handling comparisons, a pilot validation checklist, local batch traceability QR codes, and exportable reports.

## Run locally

```bash
npm install
npm run dev
```

## User accounts

PackSense uses Supabase Auth for email/password registration, sign-in, password recovery, and sign-out. Create a Supabase project, enable the Email provider, copy `.env.example` to `.env.local`, and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` from the project's API settings. In Supabase Authentication URL Configuration, add the local app URL and deployed website URL to the allowed redirect URLs. Set the same two `VITE_` values in your hosting provider before building/redeploying. These are Supabase's browser-safe project URL and anon/publishable key; never use a Supabase service-role key in frontend variables. Planner tools remain available without an account.

## Website features

- Search-first catalog of 250 Indian fruit and vegetable commodities and regional market varieties, with familiar regional/Hindi names as search aliases. No commodity list is shown until the user searches.
- A guided four-stage planner presents produce selection, package/cost comparison, food properties, and storage/transport settings one screen at a time.
- After a produce item is selected, compare indicative per-pack prices for Base, Normal, and Premium tiers before running the recommendation. The estimate responds to pack size and selected package format.
- Choose produce-specific formats such as breathable bags, vented trays, clear clamshells, mesh bags, or ventilated corrugated cartons; the selected format is reflected in the live pack plan and cost breakdown.
- Food/product inputs for moisture, fat, pH, respiration, shelf-life target, storage, temperature, relative humidity, transport, package size, and light exposure.
- Rule-based material ranking with indicative OTR/WVTR, thickness, sealability, and cost data.
- Live pack-plan summary with selected format, tier, storage conditions, estimated per-pack cost, and an indicative 1,000-pack budget.
- Pilot-readiness checklist for supplier barrier data, seal integrity, gas/headspace, distribution handling, and shelf-life testing; checklist progress is included in local exports.
- Ambient/chilled/frozen and transport-handling comparisons.
- Material and sustainability trade-off comparison.
- Batch QR code and downloadable JSON traceability record; records are generated locally and are not backed by a registry or verified supply-chain service.
- Downloadable JSON recommendation and browser print / Save as PDF.
- Responsive desktop and mobile website layout.

## Deploying the website

Build static website assets with `npm run build`; Vite writes the output to `dist/`. Deploy that folder to a static host such as Vercel, Netlify, or GitHub Pages. No hosting account or public URL is currently configured in this project.

## Important limitations

Recommendations, transmission ranges, scenario comparisons, cost indices, sustainability indicators, package geometry, and shelf-life estimates are indicative decision-support outputs—not measured engineering results or validated ML predictions. The QR is a locally generated data carrier, not proof of provenance. Validate product-specific materials, food-contact compliance, seals, barrier performance, MAP, safety, and shelf life through appropriate qualified testing before commercial use.

Catalog property values are indicative produce-group defaults, not measured commodity-specific data.

INR packaging costs use configurable indicative estimates and a package-size scaling heuristic. They are not supplier quotations. Tier-specific gas mixes are illustrative targets only; validate commodity respiration, film transmission, seal integrity, and equilibrium headspace before use.
=======
# PACKSENSE-AI
>>>>>>> 25303c61d3d618f1e32f74a6c960eaf12a9c7698
