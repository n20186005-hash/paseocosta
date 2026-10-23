import type { Language } from "../components/SiteShell";
import { attraction, site, siteUrl, heroImageUrl } from "../data/site";
import { faq } from "../data/faq";

/**
 * Builds the TouristAttraction JSON-LD for the Paseo de la Costa entity.
 * The node is language-neutral in name but carries a localized description so
 * Google can anchor the entity in its Knowledge Graph regardless of locale.
 */
export function buildAttractionSchema(lang: Language) {
  const description =
    lang === "es"
      ? `Guía de visita completa a ${attraction.fullName} en ${attraction.city}, ${attraction.provinceEs}, ${attraction.country}: ubicación, accesos, servicios y consejos de recorrido.`
      : `Comprehensive visitor guide to ${attraction.fullName} in ${attraction.city}, ${attraction.province}, ${attraction.country}: location, access, services and walking tips.`;

  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": `${siteUrl()}/#attraction`,
    name: attraction.fullName,
    alternateName: [attraction.shortName, `${attraction.city} ${attraction.fullName}`],
    description,
    url: siteUrl(),
    image: [heroImageUrl()],
    isAccessibleForFree: true,
    address: {
      "@type": "PostalAddress",
      addressLocality: attraction.city,
      addressRegion: attraction.provinceEs,
      addressCountry: attraction.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: attraction.lat,
      longitude: attraction.lon,
    },
    hasMap: attraction.mapsShareUrl,
    sameAs: [
      attraction.mapsShareUrl,
      attraction.govtTourismUrl,
    ],

  };
}

/** Builds the FAQPage JSON-LD, mirroring the rendered FAQ list for the locale. */
export function buildFaqSchema(lang: Language) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq[lang].map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
}

/** Localized SEO <title> following the "attraction + city + visitor guide" pattern. */
export function seoTitle(lang: Language): string {
  return lang === "es"
    ? `${attraction.fullName} ${attraction.city} — Guía de visita`
    : `${attraction.fullName} ${attraction.city} — Visitor Guide`;
}

/** Localized visitor description. */
export function seoDescription(lang: Language): string {
  return lang === "es"
    ? `Ubicación y mapa del ${attraction.fullName} en ${attraction.city}, junto al Río Limay. Cómo llegar, estacionamiento, servicios, pronóstico y rutas para recorrer la costanera.`
    : `Location and map of ${attraction.fullName} in ${attraction.city}, by the Río Limay. How to get there, parking, services, weather forecast and walking routes for the waterfront.`;
}

export { site };
