import { defineMiddleware } from "astro:middleware";
const routes = new Set(["/", "/en/", "/privacidad", "/terminos", "/cookies", "/en/privacidad", "/en/terminos", "/en/cookies"]);
export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  if (url.protocol === "http:" && !["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)) {
    url.protocol = "https:";
    return Response.redirect(url.href, 301);
  }
  let path = url.pathname.replace(/\/index\.html$/, "/");
  if (path === "/en") path = "/en/";
  if (path.endsWith("/") && path !== "/" && path !== "/en/" && routes.has(path.slice(0,-1))) path = path.slice(0,-1);
  if (path !== url.pathname && routes.has(path)) {
    url.pathname = path; return Response.redirect(url.href, 301);
  }
  const response = await next();
  const headers = new Headers(response.headers);
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  if (headers.get("Content-Type")?.includes("text/html")) {
    headers.set("Cache-Control", "no-store");
    headers.set("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://cloudflareinsights.com; frame-src https://www.google.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none'");
  }
  if (response.status === 404) headers.set("X-Robots-Tag", "noindex");
  return new Response(context.request.method === "HEAD" ? null : response.body, { status: response.status, statusText: response.statusText, headers });
});
