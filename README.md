# Pure Canada Website

Website for **Pure Canada** — "Rebuilding Lives. Restoring Hope".

## Stack

- `client/` — React (Vite)
- `server/` — Node.js (Express API)

## Brand

- Fonts: Primary `Cinzel`, Secondary `Open Sans`
- Colors: `#525252` (dark), `#00D7E6` (primary), `#01B1E2` (secondary)

## Getting started

```bash
npm run install:all   # installs client + server dependencies
npm run dev           # runs client (http://localhost:5173) and server (http://localhost:4000) together
```

## Donation button

The "Donate Now" button lives in [client/src/components/DonationButton.jsx](client/src/components/DonationButton.jsx).
Its link is intentionally empty (`DONATION_LINK = ""`) until a real payment/donation
processor URL is available — update that constant when ready.
