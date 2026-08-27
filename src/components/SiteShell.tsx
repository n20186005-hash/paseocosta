/**
 * Design reminder — Cartografía de ribera: editorial mapping, Limay blue,
 * real photography, asymmetric river-like flow, and calm factual wayfinding.
 */
import { Globe2 } from "lucide-react";

export type Language = "es" | "en";

/** Two river courses joining into one shared current: the sole recurring brand gesture. */
export function ConfluenceMark({ className = "" }: { className?: string }) {
  return <svg className={`confluence-mark ${className}`} viewBox="0 0 48 48" aria-hidden="true">
    <path d="M7 8c9 3 9 13 15 17 4 3 8 4 18 15" />
    <path d="M41 8c-9 3-9 13-15 17-4 3-8 4-18 15" />
    <path className="confluence-outflow" d="M24 25c0 7 0 11 0 17" />
    <circle cx="24" cy="25" r="2.4" />
  </svg>;
}

type ShellCopy = {
  home: string;
  practical: string;
  map: string;
  faq: string;
  legal: string;
  menu: string;
  close: string;
  language: string;
  navigation: string;
  sources: string;
  privacy: string;
  terms: string;
  cookies: string;
  disclaimer: string;
  references: string;
  copyright: string;
};

const copy: Record<Language, ShellCopy> = {
  es: {
    home: "Inicio",
    practical: "Planificá tu visita",
    map: "Ubicación",
    faq: "Preguntas",
    legal: "Información legal",
    menu: "Abrir menú",
    close: "Cerrar menú",
    language: "Cambiar idioma",
    navigation: "Navegación principal",
    sources: "Fuentes públicas",
    privacy: "Privacidad",
    terms: "Términos",
    cookies: "Cookies",
    disclaimer:
      "Esta guía independiente y sin fines de lucro no está afiliada a organismos gubernamentales ni a la administración oficial del atractivo.",
    references:
      "Información contrastada con fuentes públicas de la Municipalidad de Neuquén, Turismo Provincia del Neuquén y Turismo de Argentina. No contiene recomendaciones comerciales.",
    copyright: "© 2026 Paseo de la Costa Guía. Todos los derechos reservados.",
  },
  en: {
    home: "Home",
    practical: "Plan your visit",
    map: "Location",
    faq: "Questions",
    legal: "Legal information",
    menu: "Open menu",
    close: "Close menu",
    language: "Change language",
    navigation: "Primary navigation",
    sources: "Public sources",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",
    disclaimer:
      "This independent, nonprofit guide is not affiliated with any government body or the attraction's official administration.",
    references:
      "Information is cross-checked against public materials from the Municipality of Neuquén, Neuquén Province Tourism and Argentina Tourism. It contains no commercial recommendations.",
    copyright: "© 2026 Paseo de la Costa Guide. All rights reserved.",
  },
};

export function LanguageSwitch({ language }: { language: Language }) {
  const c = copy[language];
  return (
    <div className="language-switch" aria-label={c.language}>
      <Globe2 aria-hidden="true" size={16} strokeWidth={1.8} />
      <a href="/" className={language === "es" ? "is-active" : ""} aria-current={language === "es" ? "page" : undefined}>ES</a>
      <span aria-hidden="true">/</span>
      <a href="/en/" className={language === "en" ? "is-active" : ""} aria-current={language === "en" ? "page" : undefined}>EN</a>
    </div>
  );
}

export function SiteHeader({ language, compact = false }: { language: Language; compact?: boolean }) {
  const c = copy[language];
  const homeHref = language === "en" ? "/en/" : "/";
  const nav = compact
    ? [{ label: c.home, href: homeHref }, { label: c.legal, href: "#legal" }]
    : [
        { label: c.home, href: "#inicio" },
        { label: c.practical, href: "#visita" },
        { label: c.map, href: "#ubicacion" },
        { label: c.faq, href: "#preguntas" },
      ];

  return (
    <header className="site-header">
      <a href={homeHref} className="brand" aria-label="Paseo de la Costa Guía">
        <ConfluenceMark />
        <span><b>Paseo</b><i>de la Costa</i></span>
      </a>
      <nav className="primary-nav" aria-label={c.navigation}>
        {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        <div className="nav-language"><LanguageSwitch language={language} /></div>
      </nav>
      <div className="header-tools"><LanguageSwitch language={language} /></div>
    </header>
  );
}

export function SiteFooter({ language }: { language: Language }) {
  const c = copy[language];
  const legalPath = language === "en" ? "/en" : "";
  return (
    <footer className="site-footer" id="legal">
      <div className="footer-current" aria-hidden="true"><span /><span /></div>
      <div className="footer-grid">
        <div className="footer-brand">
          <ConfluenceMark />
          <p>{c.disclaimer}</p>
        </div>
        <div className="footer-links">
          <p className="eyebrow">{c.legal}</p>
          <a href={`${legalPath}/privacidad`}>{c.privacy}</a>
          <a href={`${legalPath}/terminos`}>{c.terms}</a>
          <a href={`${legalPath}/cookies`}>{c.cookies}</a>
        </div>
        <div className="footer-note">
          <p className="eyebrow">{c.sources}</p>
          <p>{c.references}</p>
        </div>
      </div>
      <div className="footer-bottom"><span>{c.copyright}</span><span>{language === "es" ? "Neuquén, Argentina" : "Neuquén, Argentina"}</span></div>
    </footer>
  );
}

export { copy as shellCopy };
