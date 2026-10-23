# Paseo de la Costa visitor guide

Spanish (`/`) and English (`/en/`) Astro server-rendered pages, with matching privacy, terms and cookie pages. React components render on the server without hydration. Weather is requested by the Astro server from Open-Meteo and cached for ten minutes where Cloudflare Cache API is available; failed or malformed forecasts produce an unavailable message.

Use pnpm 10.4.1 and the pinned dependencies. Run `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build`. The Cloudflare adapter emits `dist/server/wrangler.json` and `dist/client`; Wrangler uses the generated deployment configuration. The production Worker project is `paseocosta`.

Visitor information is based on [Neuquén municipal tourism](https://www.neuquencapital.gov.ar/turismo/paseo-costero-4/). The wider waterfront and Isla 132 are distinct scopes. No complete opening schedule is confirmed here. Public Maps ratings are dated and attributed; the guide does not publish its own aggregate rating.

The cookie page controls the existing Google Analytics integration. Default measurement is disabled until accepted; the local preference persists in this browser. Google Maps, Google Fonts and hosting resources have separate data flows described on the legal pages. No account, contact form or booking system is provided.

See [VISUAL_CREDITS.md](VISUAL_CREDITS.md) for original illustrations. The decorative river lines are conceptual SVG graphics, not geographic maps or photographs.
