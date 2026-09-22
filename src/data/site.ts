/**
 * Single source of truth for the Paseo de la Costa geographic entity and the
 * site's SEO name. Other modules (schema builders, headings, source links) read
 * from here so the entity is bound consistently across HTML, JSON-LD and meta tags.
 */

export const site = {
  domain: "paseocosta.com",
  /** SEO site name follows the "attraction + city + visitor guide" pattern. */
  nameEs: "Paseo de la Costa Neuquén — Guía de visita",
  nameEn: "Paseo de la Costa Neuquén — Visitor Guide",
} as const;

export function withSiteName(suffix: string, lang: "es" | "en"): string {
  return lang === "es" ? `${suffix} | ${site.nameEs}` : `${suffix} | ${site.nameEn}`;
}

export const attraction = {
  fullName: "Paseo de la Costa",
  /** Common / domain-equivalent name used in alternateName and semantic copy. */
  shortName: "Paseo Costero Río Limay",
  city: "Neuquén",
  province: "Neuquén Province",
  provinceEs: "Provincia de Neuquén",
  country: "Argentina",
  countryCode: "AR",
  /** Argentine postal code (CPA) for central Neuquén. */
  postalCode: "Q8300",
  lat: -38.97917527170686,
  lon: -68.05618952252352,
  mapsShareUrl: "https://maps.app.goo.gl/rVB9GRmjSuwGKSyJ8",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5516.618733068807!2d-68.05618952252352!3d-38.97917527170686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a32203113e6c7%3A0x1ec9e5b4b83d4aa7!2sPaseo%20de%20la%20Costa!5e1!3m2!1ses-419!2sar!4v1787793759333!5m2!1ses-419!2sar",
  phone: "+54 299 571-9023",
  ratingValue: 4.6,
  ratingCount: 28845,
  nearbyLandmark1: "Isla 132",
  nearbyLandmark2: "Confluencia de los ríos Limay y Neuquén",
  /** Official municipal tourism page for the promenade. */
  govtTourismUrl: "https://www.neuquencapital.gov.ar/turismo/paseo-costero-4/",
  /** Province tourism portal. */
  provinceTourismUrl: "https://www.neuquen.gob.ar",
  /** National tourism portal (E-E-A-T + entity association). */
  argentinaTourismUrl: "https://www.argentina.travel",
} as const;

/** Absolute URL helpers built from the production domain. */
export const siteUrl = (path = "") => `https://${site.domain}${path}`;
export const heroImageUrl = () => `${siteUrl()}/images/paseo-limay-hero-contours.jpg`;
