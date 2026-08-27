import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// Single source of truth for the production domain. Leave PUBLIC_SITE unset while the domain is pending.
const site = process.env.PUBLIC_SITE || undefined;
const useCloudflareAdapter = process.argv.includes("build");
const storageProxy = {
  name: "manus-storage-proxy",
  configureServer(server) {
    server.middlewares.use("/manus-storage", async (req, res) => {
      const key = req.url?.replace(/^\//, "");
      const baseUrl = (process.env.BUILT_IN_FORGE_API_URL || "").replace(/\/+$/, "");
      const token = process.env.BUILT_IN_FORGE_API_KEY;
      if (!key || !baseUrl || !token) { res.statusCode = 500; res.end("Storage proxy unavailable"); return; }
      try {
        const url = new URL("v1/storage/presign/get", `${baseUrl}/`);
        url.searchParams.set("path", key);
        const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
        const payload = await response.json();
        if (!response.ok || !payload.url) throw new Error("No storage URL");
        res.writeHead(307, { Location: payload.url, "Cache-Control": "no-store" });
        res.end();
      } catch { res.statusCode = 502; res.end("Storage proxy error"); }
    });
  },
};

export default defineConfig({
  site,
  output: "server",
  adapter: useCloudflareAdapter ? cloudflare() : undefined,
  integrations: [react(), ...(site ? [sitemap()] : [])],
  vite: {
    plugins: [tailwindcss(), storageProxy],
    server: { allowedHosts: ["3000-idwb2p6inevodiuwb6v1e-8a5e6e22.us4.manus.computer"] },
  },
});
