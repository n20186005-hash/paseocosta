import type { Language } from "../components/SiteShell";

/**
 * Single source of truth for the FAQ section. Rendered as <details> in Home.tsx
 * and mirrored into the FAQPage JSON-LD so the visible page and structured data
 * stay identical (E-E-A-T / featured-snippet consistency).
 */
export const faq: Record<Language, [string, string][]> = {
  es: [
    [
      "¿Dónde se encuentra Paseo de la Costa?",
      "Paseo de la Costa se ubica en la ciudad de Neuquén, en la Provincia de Neuquén, Argentina, junto al río Limay y al entorno de Isla 132. El paseo costero más amplio conecta varios sectores; no es una única ruta en la isla.",
    ],
    [
      "¿Se paga entrada?",
      "La Municipalidad informa ingreso libre y gratuito a Isla 132. Los eventos y actividades específicas pueden tener sus propias condiciones.",
    ],
    [
      "¿Cuánto tiempo necesito?",
      "Para una primera visita, entre una y dos horas permite caminar un tramo con pausas. La duración cambia según el acceso y el medio de movilidad.",
    ],
    [
      "¿Puedo ir en bicicleta?",
      "Sí. La información municipal señala bicisendas y pide convivencia entre ciclistas y peatones. Moderá la velocidad en áreas concurridas.",
    ],
    [
      "¿Hay baños?",
      "Existe un módulo de baños públicos informado para un tramo del Paseo Costero Río Limay cercano a Club Unipol. Consultá en el día la disponibilidad y el horario.",
    ],
    [
      "¿Es buena idea entrar al río?",
      "El río requiere precaución. No des por sentadas las condiciones de baño; observá señalización, condiciones climáticas y pautas oficiales antes de acercarte al agua.",
    ],
    [
      "¿Hay comida o estacionamiento?",
      "Hay servicios urbanos en las cercanías y zonas de estacionamiento en distintos accesos, pero la oferta y la capacidad pueden variar. Esta guía no recomienda negocios concretos.",
    ],
    [
      "¿A qué hora puedo visitarlo?",
      "No contamos con un horario general confirmado para todos los accesos. Los servicios y actividades puntuales pueden tener horarios propios; verificá en el lugar.",
    ],
  ],
  en: [
    [
      "Where is Paseo de la Costa located?",
      "Paseo de la Costa is located in the city of Neuquén, in Neuquén Province, Argentina, beside the Limay River and Isla 132. The wider waterfront connects several sections; it is not a single island route.",
    ],
    [
      "Is there an admission fee?",
      "The municipality lists free public entry to Isla 132. Individual events and activities may have their own conditions.",
    ],
    [
      "How long should I allow?",
      "For a first visit, one to two hours lets you walk a section and pause. Timing changes with access point and mode of travel.",
    ],
    [
      "Can I bring a bicycle?",
      "Yes. Municipal information notes cycle paths and asks cyclists and walkers to share the space. Reduce speed in busy areas.",
    ],
    [
      "Are there restrooms?",
      "A public restroom module is reported near Club Unipol for one section of Paseo Costero Río Limay. Confirm availability and hours on the day.",
    ],
    [
      "Is it a good idea to enter the river?",
      "The river calls for care. Do not assume swimming conditions; check signs, weather and official guidance before approaching the water.",
    ],
    [
      "Are there food options or parking?",
      "There are urban services nearby and parking areas at different access points, but offer and capacity can change. This guide does not recommend specific businesses.",
    ],
    [
      "What are the visiting hours?",
      "We have no confirmed general schedule for every access point. Specific services and activities may keep their own hours; check on site.",
    ],
  ],
};
