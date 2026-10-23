/**
 * Design reminder — Cartografía de ribera: factual editorial hierarchy and quiet,
 * accessible reading experience in the same Limay-blue geographical identity.
 */
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader, type Language } from "./SiteShell";

type LegalKind = "privacy" | "terms" | "cookies";
type LegalContent = { eyebrow: string; title: string; intro: string; sections: readonly (readonly [string, string])[] };

const legalCopy: Record<Language, Record<LegalKind, LegalContent>> = {
  es: {
    privacy: {
      eyebrow: "Información legal",
      title: "Tu privacidad, explicada sin vueltas.",
      intro: "Esta página describe qué información mínima puede procesar esta guía, para qué y qué decisiones podés tomar.",
      sections: [
        ["Información que puede recopilarse", "Solo se procesa la información mínima necesaria para que el sitio funcione y para entender su uso de forma agregada. Esto puede incluir datos técnicos de navegación, como dirección IP, tipo de navegador y páginas visitadas; cookies y tecnologías similares."],
        ["Cómo se utiliza", "La información puede utilizarse para mejorar los contenidos y la experiencia de uso, analizar patrones de tráfico de forma agregada, cumplir obligaciones legales aplicables."],
        ["Servicios de terceros", "El sitio puede mostrar un mapa incorporado de Google y, solo si se aceptan las cookies analíticas, utilizar Google Analytics. Cada servicio opera bajo sus propias políticas. Las fotografías conservan los derechos de sus autores."],
        ["Recursos y alojamiento", "Google Maps y Google Fonts reciben solicitudes del navegador bajo sus políticas. Open-Meteo se consulta desde el servidor para el pronóstico. Cloudflare aloja el sitio y puede inyectar un beacon de rendimiento/RUM, independiente de la elección de Analytics; este control no lo administra. Consultá la documentación de los proveedores enlazada abajo."],
        ["Tus derechos", "De acuerdo con el RGPD y la normativa aplicable, podés solicitar acceso, rectificación o eliminación de datos personales, oponerte a ciertos tratamientos y presentar una queja ante la autoridad competente."],
      ],
    },
    terms: {
      eyebrow: "Información legal",
      title: "Una guía para orientarte, no una promesa de servicio.",
      intro: "Al utilizar este sitio aceptás estos términos de uso y reconocés el carácter independiente e informativo del proyecto.",
      sections: [
        ["Uso del contenido", "Todo el contenido se publica con fines de orientación general. Esta es una guía independiente de información turística y no está vinculada con el atractivo, organismos gubernamentales ni operadores comerciales."],
        ["Exactitud y cambios", "Buscamos contrastar la información con fuentes públicas; aun así, condiciones, servicios, accesos y actividades pueden variar. Antes de viajar, verificá los datos importantes con canales oficiales y la señalización del lugar."],
        ["Propiedad intelectual", "El diseño y los textos originales de esta guía están protegidos. Las fotografías pertenecen a sus respectivos autores. El uso de Google Maps se rige por los términos del proveedor."],
        ["Limitación de responsabilidad", "El sitio se ofrece tal como está, sin garantías. No asumimos responsabilidad por pérdidas, daños o decisiones tomadas a partir de la información publicada."],
      ],
    },
    cookies: {
      eyebrow: "Preferencias de navegación",
      title: "Elegí cómo querés recorrer esta guía.",
      intro: "Esta guía ofrece una elección local de medición. La medición analítica se activa con la elección de este panel, guardada en este navegador.",
      sections: [
        ["Cookies necesarias", "La lectura de las páginas no requiere una cuenta ni una cookie de idioma. Los proveedores integrados pueden usar sus propias tecnologías."],
        ["Cookies analíticas", "Si las activás, Google Analytics puede recopilar información agregada sobre el uso de las páginas para ayudarnos a comprender qué contenidos son útiles."],
        ["Preferencia local", "El idioma se identifica por la URL. La elección de Analytics se guarda en almacenamiento local; no hay una cookie de idioma."],
        ["Cookies de marketing", "Esta guía no usa cookies de marketing ni muestra anuncios personalizados."],
      ],
    },
  },
  en: {
    privacy: {
      eyebrow: "Legal information",
      title: "Your privacy, plainly explained.",
      intro: "This page describes the limited information this guide may process, why it does so and which choices you can make.",
      sections: [
        ["Information that may be collected", "Only the minimum information needed to operate the site and understand its aggregate use may be processed. This can include technical browsing data such as IP address, browser type and visited pages; cookies and similar technologies."],
        ["How it is used", "Information may be used to improve content and the visitor experience, analyse aggregate traffic patterns, meet applicable legal obligations."],
        ["Third-party services", "The site may display an embedded Google map and, only when analytics cookies are accepted, use Google Analytics. Each service operates under its own policy. Photographs remain the property of their respective authors."],
        ["Resources and hosting", "Google Maps and Google Fonts receive browser requests under their own policies. Open-Meteo is queried by the server for forecasts. Cloudflare hosts this site and may inject a performance/RUM beacon, separate from the Analytics choice; this setting does not control it. See the linked provider documentation below."],
        ["Your rights", "Under the GDPR and applicable rules, you may request access to, correction or deletion of personal data, object to certain processing and lodge a complaint with the relevant authority."],
      ],
    },
    terms: {
      eyebrow: "Legal information",
      title: "A guide to help you orient yourself, not a service promise.",
      intro: "By using this site, you accept these terms and acknowledge the project's independent, informational nature.",
      sections: [
        ["Using this content", "All content is published for general orientation. This is an independent visitor-information guide and is not connected to the attraction, government bodies or commercial operators."],
        ["Accuracy and changes", "We aim to cross-check information against public sources; however, conditions, services, access and activities can change. Check important details with official channels and on-site signage before travelling."],
        ["Intellectual property", "The original design and writing in this guide are protected. Photographs belong to their respective authors. Google Maps use is governed by the provider's terms."],
        ["Limitation of liability", "The site is provided as is, without warranties. We do not accept responsibility for loss, damage or decisions arising from use of published information."],
      ],
    },
    cookies: {
      eyebrow: "Browsing preferences",
      title: "Choose how you would like to use this guide.",
      intro: "This guide provides a local measurement choice. Analytical measurement starts with the choice below, saved in this browser.",
      sections: [
        ["Necessary cookies", "Reading the pages requires no account or language cookie. Embedded providers may use their own technologies."],
        ["Analytics cookies", "If enabled, Google Analytics may collect aggregate information about page use, helping us understand which content is useful."],
        ["Local preference", "Language follows the URL. The Analytics choice is saved in local storage; no language cookie is used."],
        ["Marketing cookies", "This guide does not use marketing cookies or display personalised advertising."],
      ],
    },
  },
};

export default function LegalPage({ kind, initialLanguage = "es" }: { kind: LegalKind; initialLanguage?: Language }) {
  const language = initialLanguage;
  const content = legalCopy[language][kind];
  const homeHref = language === "en" ? "/en/" : "/";

  return (
    <div className="site-frame legal-frame" lang={language}>
      <SiteHeader language={language} compact topic={kind === "privacy" ? "privacidad" : kind === "terms" ? "terminos" : "cookies"} />
      <main>
        <section className="legal-hero">
          <div className="legal-hero-line" aria-hidden="true"><span /><span /></div>
          <a href={homeHref} className="back-link"><ArrowLeft size={16} /> {language === "es" ? "Volver a la guía" : "Back to the guide"}</a>
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="lede">{content.intro}</p>
          <p className="legal-update">{language === "es" ? "Última actualización: 23 de octubre de 2026" : "Last updated: 23 October 2026"}</p>
        </section>
        <section className="legal-content">
          <div className="legal-index">
            <ShieldCheck size={23} aria-hidden="true" />
            <p>{language === "es" ? "Lectura clara, decisiones informadas." : "Clear reading, informed choices."}</p>
          </div>
          <div className="legal-sections">
            {content.sections.map(([heading, text], index) => <article key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{heading}</h2><p>{text}</p></div></article>)}
          </div>
          <p className="source-links"><a href="https://policies.google.com/privacy">Google Privacy</a> · <a href="https://open-meteo.com/en/terms">Open-Meteo</a> · <a href="https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/">Cloudflare Web Analytics</a></p>
          {kind === "cookies" && <div className="cookie-panel">
            <div className="cookie-heading"><p className="eyebrow">{language === "es" ? "Panel de consentimiento" : "Consent panel"}</p><h2>{language === "es" ? "Tus preferencias" : "Your preferences"}</h2></div>
            <label className="cookie-row" htmlFor="analytics-choice"><span><strong>Google Analytics</strong><small>{language === "es" ? "Opcional; desactivado hasta aceptar" : "Optional; disabled until accepted"}</small></span><input id="analytics-choice" type="checkbox" /></label>
            <p id="analytics-status" role="status">{language === "es" ? "Podés cambiar esta elección en cualquier momento. Al desactivar se detiene la medición futura y se borran las cookies _ga accesibles desde esta página; los datos ya enviados no se retiran." : "Change this choice at any time. Turning it off stops future measurement and removes _ga cookies accessible from this page; previously sent data cannot be recalled."}</p>
            <noscript>{language === "es" ? "Se necesita JavaScript para guardar esta elección; Analytics no carga sin JavaScript." : "JavaScript is required to save this choice; Analytics does not load without JavaScript."}</noscript>
          </div>}
        </section>
      </main>
      <SiteFooter language={language} />
    </div>
  );
}
