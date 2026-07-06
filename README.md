# Mundi Mundi Bash 2026 · The Outback Lads' Trip

Trip website for the August 2026 road trip: Sydney → Mungo NP → Mundi Mundi Bash → Woomera → Coober Pedy → (return route under group vote) → Sydney.

**Live site:** https://snaglepus.github.io/mundi26/

## Features

- Full day-by-day itinerary with the fixed spine and every open decision
- Interactive Leaflet map: 58 pins (stays, pubs, fuel, sights, stargazing), main route + 4 return options, per-pin Google Maps deep links
- Return-route vote with comparison table (localStorage)
- Pub passport: stamp all 17 pubs as the trip unfolds (localStorage)
- Seven day-themed playlists with playable Spotify track embeds, plus the official Bash Travel Tunes playlists
- Dark-sky runbook with per-night moon data
- Packing checklist with saved progress, fuel plan, bookings board
- Live countdown to departure, responsive for mobile / tablet / desktop

## Stack

Vite + React, react-leaflet + OpenStreetMap, self-hosted fonts (Fraunces + Inter). No backend; all interactivity is client-side.

## Develop

```bash
npm install
npm run dev     # http://localhost:5173/mundi26/
npm run build   # static bundle in dist/
```

## Deploy

Pushes to `main` deploy to GitHub Pages automatically via `.github/workflows/deploy.yml`.

## Content sources

Built from the trip vault (`itinerary.md`, `overview.md`, `playlists.md`, `mundi-mundi-2026-map.kml`). Photos are openly licensed from Wikimedia Commons; per-image credits are listed in the site footer.
