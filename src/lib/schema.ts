import type { Language } from "../components/SiteShell";
import type { Topic } from "../data/topics";
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

/** Localized SEO <title>. The Spanish title targets the verified GSC queries. */
export function seoTitle(lang: Language): string {
  return lang === "es"
    ? "Paseo de la Costa Neuquén: mapa, acceso y qué hacer"
    : `${attraction.fullName} ${attraction.city} — Visitor Guide`;
}

/** Localized visitor description. */
export function seoDescription(lang: Language): string {
  return lang === "es"
    ? "Mapa de accesos, Isla 132, estacionamiento, recorridos, cafeterías y restaurantes junto al río Limay. Guía independiente para visitar Paseo de la Costa."
    : `Location and map of ${attraction.fullName} in ${attraction.city}, by the Río Limay. How to get there, parking, services, weather forecast and walking routes for the waterfront.`;
}

/**
 * Builds the JSON-LD for a long-tail topic page: WebPage + BreadcrumbList +
 * FAQPage. The WebPage is about the TouristAttraction entity but deliberately
 * does not carry a third-party AggregateRating.
 */
export function buildTopicSchemas(topic: Topic) {
  const pageUrl = siteUrl("/" + topic.slug);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: siteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: topic.content.h1,
        item: pageUrl,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topic.content.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: topic.title,
    description: topic.description,
    inLanguage: "es-AR",
    isPartOf: { "@type": "WebSite", "@id": `${siteUrl()}/#website` },
    about: { "@type": "TouristAttraction", "@id": `${siteUrl()}/#attraction` },
    breadcrumb: { "@type": "BreadcrumbList", "@id": `${pageUrl}#breadcrumb` },
    mainEntity: faqPage,
  };

  return [webPage, breadcrumb, faqPage];
}

export { site };
