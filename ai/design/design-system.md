# StreamSensei — Design System

**Stitch generation used** — real AI-generated homepage mockup, not hand-guessed.
Project: `projects/11528523295092084309` · Design system asset: `assets/12486432164858448476`
Model: GEMINI_3_1_PRO · Prompt + design brief preserved in `ai/research/stitch-design-brief.md`.
Screenshot reference saved to scratchpad during build (dojo-meets-broadcast-studio direction,
confirmed on review — near-black background, torii red-orange primary, sensei-gold accent,
bold geometric Space Grotesk-style headings). The site's hand-built component system implements
this same direction faithfully (colors/type ported 1:1 into `globals.css` + `fonts.ts`) rather
than porting the raw Stitch HTML verbatim, since the codebase uses a component-driven Next.js
build system (shadcn tokens, motion, section components) that predates and supersedes literal
HTML porting.

## Palette (exact hexes)
- Background: `#0b0c0f` (near-black ink)
- Card/elevated: `#14161b`
- Foreground: `#f1efe9` (warm dojo-paper white)
- Primary: `#e2543a` (torii red-orange)
- Accent: `#f0b429` (sensei gold)
- Muted: `#202329` / `#a2a5ab`
- Border: `#292c33`

## Typography
- Heading: Sora (500/600/700/800) — bold geometric, tech-forward
- Body: Inter

## Motif
Dojo/mastery meets broadcast-studio: live-indicator dot badges, thin rule lines, waveform/HUD
imagery, calm-authority tone (not hype-bro gamer aesthetic). Dark-dominant per website-builder
rules for SaaS/tech/creator-economy businesses, with a light-inverted "Why StreamSensei" band
for section-rhythm contrast (foreground-colored band, not another dark-on-dark repeat).

## Fallback disclosure
Not applicable — Stitch generation succeeded on first attempt, no quota exhaustion fallback used.
