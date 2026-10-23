import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// Single source of truth for the production domain. Set explicitly so canonical,
// OG absolute URLs and sitemap are produced; PUBLIC_SITE overrides when provided.
const site = process.env.PUBLIC_SITE || "https://paseocosta.com";
const useCloudflareAdapter = process.argv.includes("build");
export default defineConfig({
  site,
  output: "server",
  session: false,
  adapter: useCloudflareAdapter ? cloudflare({ imageService: "passthrough" }) : undefined,
  integrations: [react(), ...(site ? [sitemap({ serialize(item) { const url = new URL(item.url); if (url.pathname !== "/" && url.pathname !== "/en/") { url.pathname = url.pathname.replace(/\/$/, ""); item.url = url.href; } return item; } })] : [])],
  vite: {
    plugins: [tailwindcss()],
    build: { assetsInlineLimit: 0 },
  },
});
