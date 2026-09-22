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
    "@type": ["TouristAttraction", "LocalBusiness"],
    "@id": `${siteUrl()}/#attraction`,
    name: attraction.fullName,
    alternateName: [attraction.shortName, `${attraction.city} ${attraction.fullName}`],
    description,
    url: siteUrl(),
    image: [heroImageUrl()],
    isAccessibleForFree: true,
    telephone: attraction.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: attraction.fullName,
      addressLocality: attraction.city,
      addressRegion: attraction.provinceEs,
      postalCode: attraction.postalCode,
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
      attraction.provinceTourismUrl,
      attraction.argentinaTourismUrl,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: attraction.ratingValue,
      reviewCount: attraction.ratingCount,
      bestRating: 5,
      worstRating: 1,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
      description:
        lang === "es"
          ? "Espacio exterior de acceso público; los servicios y actividades específicos pueden tener horarios propios."
          : "Public open-air space; specific services and activities may keep their own hours.",
    },
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

/** Localized meta description, tuned for SERP click-through (GSC: 0% CTR). */
export function seoDescription(lang: Language): string {
  return lang === "es"
    ? `Guía de visita gratuita al ${attraction.fullName} en ${attraction.city}, junto al Río Limay. Cómo llegar, estacionamiento, servicios, clima en vivo y rutas para recorrer la costanera.`
    : `Free visitor guide to ${attraction.fullName} in ${attraction.city}, by the Río Limay. How to get there, parking, services, live weather and walking routes for the waterfront.`;
}

export { site };
