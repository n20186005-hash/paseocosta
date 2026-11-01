/**
 * Data-driven registry for the Spanish long-tail topic pages.
 *
 * Each topic is an independent visitor question with its own canonical URL,
 * title, description, content sections and FAQ. Topic pages are Spanish only
 * in this phase; the English homepage remains the EN entry point.
 *
 * Content rules (E-E-A-T): do not fabricate opening times, prices, menus or
 * official permissions. Where a specific business is mentioned it is a
 * "comercio de referencia" and the visitor must confirm details on site.
 */

export type TopicGroup =
  | "decision"
  | "transporte"
  | "comida"
  | "cerca"
  | "recorridos"
  | "historia"
  | "naturaleza";

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  /** Eyebrow / group label shown above the H1. */
  kicker: string;
  h1: string;
  lead: string;
  /** Short label used in related cards and the homepage cluster. */
  linkLabel: string;
  /** Verification note, e.g. "Octubre 2026". */
  updated: string;
  sections: TopicSection[];
  faq: TopicFaq[];
}

export interface Topic {
  /** Full path without leading or trailing slash, e.g. "mapa" or "cerca/sur-park". */
  slug: string;
  group: TopicGroup;
  /** Meta <title>. */
  title: string;
  /** Meta description. */
  description: string;
  /** Slugs of related topics (only published slugs should be listed). */
  related: string[];
  content: TopicContent;
}

export const GROUP_LABELS: Record<TopicGroup, string> = {
  decision: "Para planificar la visita",
  transporte: "Cómo llegar",
  comida: "Comer y beber en la ribera",
  cerca: "Alrededores de la costanera",
  recorridos: "Recorridos y rutas",
  historia: "Historia y patrimonio",
  naturaleza: "Naturaleza",
};

export const TOPICS: Topic[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Mapa y accesos
  // ─────────────────────────────────────────────────────────────
  {
    slug: "mapa",
    group: "decision",
    title: "Mapa de Paseo de la Costa: accesos e Isla 132",
    description:
      "Mapa de los accesos a Paseo de la Costa en Neuquén junto al río Limay, la referencia de Isla 132 y cómo ubicar tu entrada antes de salir.",
    related: ["isla-132", "como-llegar", "estacionamiento", "horarios-y-acceso"],
    content: {
      kicker: "Para planificar la visita",
      h1: "Mapa y accesos de Paseo de la Costa",
      lead: "Antes de salir, ubicá el acceso que querés caminar. El paseo es extenso y se recorre por tramos; el mapa señala la ficha de referencia junto al río Limay, no todos los puntos de entrada.",
      linkLabel: "Mapa y accesos",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "La ficha de referencia",
          paragraphs: [
            "La coordenada de referencia es -38.9791753, -68.0536146, en el área de Paseo de la Costa junto al río Limay, en la ciudad de Neuquén. El punto de mapa que usamos está asociado al entorno de Isla 132, que funciona como núcleo ribereño del sistema.",
            "No es la ubicación de todos los accesos de la costanera, ni del paseo de Plottier. Usalo para orientarte y luego seguí la señalización real en el día.",
          ],
        },
        {
          heading: "No es una sola entrada",
          paragraphs: [
            "El paseo costero de Neuquén se describe en tramos que suman varios kilómetros. Elegir el acceso correcto cambia la distancia que vas a caminar, el estacionamiento disponible y lo que vas a encontrar alrededor.",
          ],
          bullets: [
            "Isla 132 y su entorno: núcleo ribereño con áreas de descanso y miradores.",
            "Accesos urbanos centrales: los más cercanos al centro y al transporte público.",
            "Tramos que se extienden río abajo o hacia la confluencia: requieren planificar el acceso por separado.",
          ],
        },
        {
          heading: "Cómo usar el mapa",
          paragraphs: [
            "Abrí la ubicación en Google Maps antes de salir y marcá el acceso que vas a usar. En el lugar, priorizá la señalización vial y peatonal, porque las obras y los accesos pueden cambiar.",
          ],
          callout:
            "No contamos con un horario general confirmado para todos los accesos. Verificá en el día qué sectores están habilitados y qué servicios funcionan.",
        },
      ],
      faq: [
        {
          q: "¿El mapa es gratuito?",
          a: "Sí. Consultar la ubicación y los accesos en esta guía no tiene costo; es información de orientación. Los servicios o estacionamientos que elijas pueden tener sus propias condiciones.",
        },
        {
          q: "¿Cuántos kilómetros tiene el paseo?",
          a: "La información municipal describe unos 14 kilómetros para el paseo costero más amplio, no un circuito único en Isla 132. Para una primera visita conviene recorrer un tramo, no la totalidad.",
        },
        {
          q: "¿Dónde queda Isla 132?",
          a: "Isla 132 es un área ribereña dentro del sistema de Paseo de la Costa, junto al río Limay en Neuquén. En el mapa de referencia aparece como el punto central del paseo.",
        },
        {
          q: "¿Puedo caminar todo el paseo de una vez?",
          a: "En teoría los tramos se conectan, pero la distancia y el tiempo son grandes. Para una visita tranquila, elegí uno o dos sectores y dejá margen para pausas.",
        },
        {
          q: "¿El mapa marca dónde estacionar?",
          a: "El mapa da la ubicación general; para el estacionamiento específico de cada acceso, revisá la guía de estacionamiento y la señalización en el lugar.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Isla 132
  // ─────────────────────────────────────────────────────────────
  {
    slug: "isla-132",
    group: "decision",
    title: "Isla 132 en Paseo de la Costa: qué es y cómo entrar",
    description:
      "Qué es Isla 132 dentro de Paseo de la Costa en Neuquén, cómo llegar, qué se puede hacer y qué verificar antes de visitarla.",
    related: ["mapa", "con-ninos", "donde-comer", "recorridos/una-hora"],
    content: {
      kicker: "Para planificar la visita",
      h1: "Isla 132: el núcleo ribereño del paseo",
      lead: "Isla 132 es un área de la costanera de Neuquén vinculada con el paseo costero del río Limay. Se conoce por sus espacios abiertos, el río y la cercanía de la confluencia de los ríos.",
      linkLabel: "Isla 132",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Qué es Isla 132",
          paragraphs: [
            "Dentro del sistema de Paseo de la Costa, Isla 132 funciona como un área ribereña de uso público y recreativo. No es un parque cerrado con horario único, sino un sector del paseo donde conviven paseos, descanso y miradores.",
            "El nombre suele usarse como referencia para ubicar el acceso principal al paseo costero junto al río Limay, en el corazón de la ciudad.",
          ],
        },
        {
          heading: "Cómo llegar y entrar",
          paragraphs: [
            "Se llega en vehículo, taxi, transporte urbano o bicicleta, eligiendo el acceso que deje más cerca del tramo que querés recorrer. No asumás que queda a distancia caminable desde la terminal o el aeropuerto: confirmalo según el punto de partida.",
          ],
          bullets: [
            "En auto o taxi: seguí la señalización hacia el acceso ribereño elegido.",
            "En transporte urbano: consultá la línea y el descenso el mismo día.",
            "En bicicleta: las bicisendas unen varios tramos; llevá candado.",
          ],
        },
        {
          heading: "Qué se puede hacer",
          paragraphs: [
            "Caminar por senderos de baja dificultad, sentarse a mirar el río, recorrer miradores y aprovechar las áreas de descanso. La confluencia de los ríos Limay y Neuquén queda como un paisaje de referencia cercano, pero planificá ese tramo por separado.",
          ],
          callout:
            "El río es paisaje y también condición cambiante. No des por seguras las condiciones de baño; seguí la señalización y las pautas oficiales antes de acercarte al agua.",
        },
      ],
      faq: [
        {
          q: "¿Se paga entrada a Isla 132?",
          a: "La Municipalidad informa ingreso libre y gratuito a Isla 132 como espacio público. Eventos o actividades específicas pueden tener sus propias condiciones; consultá con su organización.",
        },
        {
          q: "¿Está abierto todo el día?",
          a: "No contamos con un horario general confirmado para el sector. Los servicios y actividades puntuales pueden tener horarios propios; verificá en el lugar.",
        },
        {
          q: "¿Hay estacionamiento en Isla 132?",
          a: "Hay zonas de estacionamiento en distintos accesos del paseo. Para el acceso específico de Isla 132, revisá la guía de estacionamiento y la señalización del día.",
        },
        {
          q: "¿Conviene para ir con niños?",
          a: "Los senderos de baja dificultad y las áreas de descanso la hacen apta para familias, pero el borde del río requiere supervisión. Verificá la guía de visita con niños.",
        },
        {
          q: "¿Dónde comer cerca?",
          a: "Cerca de los accesos urbanos suelen haber opciones de comida y bebida. Reunimos categorías y zonas en la guía de dónde comer.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Cómo llegar
  // ─────────────────────────────────────────────────────────────
  {
    slug: "como-llegar",
    group: "transporte",
    title: "Cómo llegar a Paseo de la Costa (Neuquén)",
    description:
      "Cómo llegar a Paseo de la Costa en Neuquén desde el aeropuerto, la terminal de ómnibus, el centro y en transporte urbano, auto o bicicleta.",
    related: ["mapa", "estacionamiento", "isla-132", "desde-el-centro"],
    content: {
      kicker: "Cómo llegar",
      h1: "Cómo llegar a Paseo de la Costa",
      lead: "El paseo es largo y se recorre por tramos. Elegí el acceso según el punto que querés caminar y corroborá el día de la visita las condiciones vigentes.",
      linkLabel: "Cómo llegar",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Desde el aeropuerto",
          paragraphs: [
            "El Aeropuerto Internacional Presidente Perón conecta Neuquén con vuelos nacionales. Desde allí continuá hacia la ciudad en taxi, remis, vehículo de alquiler o un servicio disponible ese día, y confirmá el punto de descenso según el acceso elegido.",
          ],
          callout: "El tiempo y la tarifa dependen del tránsito y del acceso. No asumás que el paseo queda a corta distancia del aeropuerto.",
        },
        {
          heading: "Desde la terminal de ómnibus",
          paragraphs: [
            "La Estación Terminal de Ómnibus de Neuquén recibe servicios de larga distancia. Desde la terminal, consultá las conexiones urbanas vigentes o usá taxi o remis para dirigirte al tramo del paseo que te interese.",
          ],
        },
        {
          heading: "Transporte urbano, auto y bicicleta",
          paragraphs: [
            "Las líneas de colectivos urbanos conectan el centro con distintos accesos, pero líneas y frecuencias cambian: consultá el planificador oficial el mismo día y bajá en un acceso señalizado.",
            "En auto o bicicleta, usá el mapa como orientación y seguí la señalización real. En horas de mayor concurrencia, manejá despacio y compartí el espacio con peatones y ciclistas.",
          ],
          bullets: [
            "Colectivos: confirmá línea y parada el día de la visita.",
            "Auto: estacioná en los sectores señalizados y no ocuces ciclovías.",
            "Bicicleta: respetá la convivencia con peatones y bajá la velocidad en zonas concurridas.",
          ],
        },
      ],
      faq: [
        {
          q: "¿El paseo queda caminando desde el centro?",
          a: "Algunos accesos urbanos están cerca del centro, pero la distancia depende del tramo. No des por hecho que todo el paseo es peatonal desde el centro; elegí el acceso según tu punto de partida.",
        },
        {
          q: "¿Hay colectivo que llegue al paseo?",
          a: "La red urbana conecta el centro con varios accesos, pero las líneas y frecuencias cambian. Consultá el planificador oficial el mismo día y bajá en un acceso señalizado y seguro.",
        },
        {
          q: "¿Conviene ir en bicicleta?",
          a: "Sí. Las bicisendas unen varios tramos del paseo. Llevá candado, respetá a los peatones y bajá la velocidad donde haya más gente.",
        },
        {
          q: "¿Desde dónde salen los traslados al paseo?",
          a: "Desde el aeropuerto, la terminal y las calles céntricas hay taxis y remises. Preferí los habilitados y consultá la tarifa estimada antes de subir.",
        },
        {
          q: "¿Puedo llegar en auto y estacionar?",
          a: "Sí, hay sectores de estacionamiento en distintos accesos. Revisá la guía de estacionamiento para elegir el acceso con más capacidad.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Estacionamiento
  // ─────────────────────────────────────────────────────────────
  {
    slug: "estacionamiento",
    group: "decision",
    title: "Estacionamiento en Paseo de la Costa: dónde dejar el auto",
    description:
      "Dónde estacionar en Paseo de la Costa de Neuquén según el acceso, opciones para fines de semana y cómo no bloquear circulaciones.",
    related: ["mapa", "como-llegar", "isla-132", "horarios-y-acceso"],
    content: {
      kicker: "Para planificar la visita",
      h1: "Estacionamiento en Paseo de la Costa",
      lead: "Hay sectores de estacionamiento y paradas en varios accesos urbanos del paseo. La capacidad y la disponibilidad cambian, sobre todo en fines de semana y temporada alta.",
      linkLabel: "Estacionamiento",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Estacionamiento por acceso",
          paragraphs: [
            "No hay un único estacionamiento para todo el paseo. Cada acceso urbano tiene sus propios sectores, y conviene elegir el que deja más cerca del tramo que vas a recorrer.",
          ],
          bullets: [
            "Accesos centrales: suelen tener más opciones, pero se llenan antes.",
            "Isla 132 y su entorno: estacionamiento asociado al acceso ribereño; confirmá capacidad en el día.",
            "Tramos extendidos: verificá dónde está permitido detenerse sin bloquear ciclovías.",
          ],
        },
        {
          heading: "Fines de semana y temporada alta",
          paragraphs: [
            "En los días de mayor concurrencia, llegá con margen porque la capacidad es limitada. Si un sector está completo, evaluá un acceso alternativo cercano en lugar de estacionar fuera de lo señalizado.",
          ],
        },
        {
          heading: "Buenas prácticas",
          paragraphs: [
            "Respetá la señalización, no ocuces ciclovías ni pasos peatonales, y no dejes el auto donde impida la circulación o el acceso de emergencias.",
          ],
          callout:
            "No podemos confirmar tarifas ni si algún sector es de pago. Verificá en el lugar cualquier indicación de control de estacionamiento.",
        },
      ],
      faq: [
        {
          q: "¿El estacionamiento es gratuito?",
          a: "No contamos con una confirmación general de tarifas. Algunos sectores pueden ser de pago y otros libres; verificá la señalización en el lugar.",
        },
        {
          q: "¿Dónde hay más capacidad?",
          a: "Los accesos centrales suelen tener más opciones, pero se llenan en fines de semana. Elegí el acceso según el tramo que vas a caminar y llegá con margen.",
        },
        {
          q: "¿Puedo estacionar cerca de Isla 132?",
          a: "Hay sectores de estacionamiento en el entorno de Isla 132, pero la capacidad varía. Confirmalo el día de la visita y no bloquees ciclovías ni cruces peatonales.",
        },
        {
          q: "¿Hay estacionamiento para autobuses o grupos?",
          a: "No tenemos esa información confirmada. Para grupos grandes, consultá con la municipalidad o el operador de turismo antes de la visita.",
        },
        {
          q: "¿Qué pasa si no hay lugar?",
          a: "Buscá un acceso alternativo cercano en lugar de estacionar fuera de lo permitido. La ciudad cuenta con estacionamiento urbano a corta distancia en auto o taxi.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Horarios y acceso
  // ─────────────────────────────────────────────────────────────
  {
    slug: "horarios-y-acceso",
    group: "decision",
    title: "Horarios y acceso a Paseo de la Costa (Neuquén)",
    description:
      "Información de acceso libre, horarios y límites de actividades en Paseo de la Costa: qué está confirmado y qué debés verificar en el lugar.",
    related: ["mapa", "estacionamiento", "seguridad-en-el-rio-limay", "isla-132"],
    content: {
      kicker: "Para planificar la visita",
      h1: "Horarios y acceso a Paseo de la Costa",
      lead: "El paseo es un espacio público de acceso libre, pero no tiene un horario general confirmado para todos los sectores. Los servicios y actividades puntuales siguen sus propias condiciones.",
      linkLabel: "Horarios y acceso",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Acceso libre y gratuito",
          paragraphs: [
            "La Municipalidad informa ingreso libre y gratuito a Isla 132 como espacio público. El paseo en general funciona como corredor recreativo de acceso abierto, aunque las condiciones de cada tramo dependen del sector.",
          ],
        },
        {
          heading: "Horarios que sí y no confirmamos",
          paragraphs: [
            "No contamos con un horario general confirmado para todos los accesos. Los servicios (como baños o módulos específicos), los eventos y las actividades temporales pueden tener horarios propios.",
          ],
          bullets: [
            "Actividades y eventos: consultá la organización o la agenda oficial.",
            "Servicios puntuales: confirmá disponibilidad y horario en el día.",
            "Iluminación y descanso: varían por tramo; planificá según la luz disponible.",
          ],
        },
        {
          heading: "Límites a tener en cuenta",
          paragraphs: [
            "El río tiene condiciones cambiantes. No des por seguras las condiciones de baño ni asumas habilitaciones por la temporada; seguí la señalización y las pautas oficiales.",
          ],
          callout:
            "Para cualquier decisión de viaje, contrastá horarios, accesos y condiciones con información oficial actualizada.",
        },
      ],
      faq: [
        {
          q: "¿A qué hora abre Paseo de la Costa?",
          a: "No contamos con un horario general confirmado para todos los accesos. Como espacio público de acceso libre, los tramos suelen estar abiertos, pero verificá servicios y actividades puntuales en el día.",
        },
        {
          q: "¿Se paga entrada?",
          a: "La Municipalidad informa ingreso libre y gratuito a Isla 132. Actividades o eventos específicos pueden tener sus propias condiciones.",
        },
        {
          q: "¿Hay servicios todo el día?",
          a: "No necesariamente. Servicios como baños o módulos específicos pueden tener disponibilidad y horario variables; confirmalos en el lugar.",
        },
        {
          q: "¿Puedo ir de noche?",
          a: "Las áreas abiertas pueden recorrerse, pero la iluminación y la seguridad cambian por tramo. Para una primera visita, preferí las primeras horas o el final de la tarde. Revisá la guía de visita de noche.",
        },
        {
          q: "¿El río está habilitado para bañarse?",
          a: "No asumás habilitación para baño. El río es cambiante; seguí la señalización y las pautas oficiales antes de acercarte al agua.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Seguridad en el río Limay
  // ─────────────────────────────────────────────────────────────
  {
    slug: "seguridad-en-el-rio-limay",
    group: "decision",
    title: "Seguridad en el río Limay: corriente, señalización y baño",
    description:
      "Por qué el río Limay requiere precaución en Paseo de la Costa: corriente, nivel cambiante, señalización y qué actividades acuáticas no asumir.",
    related: ["horarios-y-acceso", "mapa", "con-ninos", "cerca/balneario-rio-grande"],
    content: {
      kicker: "Para planificar la visita",
      h1: "Seguridad en el río Limay",
      lead: "El río Limay es el paisaje principal del paseo, pero también una condición cambiante. Antes de acercarte al agua, observá señalización, clima y el estado del sector.",
      linkLabel: "Seguridad en el río",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Un río regulado y cambiante",
          paragraphs: [
            "El caudal, la corriente y la profundidad pueden cambiar con el tiempo y las condiciones. Un día tranquilo no garantiza el siguiente, y la superficie en calma no indica seguridad.",
          ],
          bullets: [
            "No asumás condiciones de baño por la temporada.",
            "No infieras aguas tranquilas porque el río se ve calmo.",
            "La calma superficial no establece seguridad.",
          ],
        },
        {
          heading: "Señalización y pautas oficiales",
          paragraphs: [
            "Seguí la señalización del sector y las pautas oficiales. Si no hay indicación clara de que una zona está habilitada, no entres al agua. El pronóstico del clima de esta guía no informa el estado del río ni habilita actividades acuáticas.",
          ],
        },
        {
          heading: "Cuidado en la orilla",
          paragraphs: [
            "Mantenete en senderos y sectores habilitados, y no te acerques al borde inestable del agua. Con niños o mascotas, mantené la supervisión constante.",
          ],
          callout:
            "El río no es una piscina: corriente, temperatura y profundidad varían. La responsabilidad de acercarse al agua es de cada visitante.",
        },
      ],
      faq: [
        {
          q: "¿Se puede entrar al río Limay?",
          a: "No des por seguras las condiciones de baño. El río requiere precaución y puede tener corriente, cambios de nivel y zonas no habilitadas. Seguí la señalización y las pautas oficiales.",
        },
        {
          q: "¿El clima influye en la seguridad del río?",
          a: "Sí. Lluvias, viento y cambios de caudal modifican las condiciones. Revisá el pronóstico y no te acerques al agua si las condiciones no son claras.",
        },
        {
          q: "¿Hay zonas habilitadas para bañarse?",
          a: "No confirmamos habilitaciones específicas en Paseo de la Costa. Otras playas o balnearios, como el Balneario Río Grande, tienen su propia regulación; investigalos por separado.",
        },
        {
          q: "¿Qué hago si veo a alguien en dificultad?",
          a: "No te arriesgues sin conocer las condiciones. Pedí ayuda a servicios de emergencia y seguí las indicaciones oficiales del sector.",
        },
        {
          q: "¿El pronóstico de la guía informa el nivel del río?",
          a: "No. El módulo de clima es una estimación meteorológica de modelo; no reporta caudal, seguridad de baño ni habilitación para actividades acuáticas.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 7. Dónde comer
  // ─────────────────────────────────────────────────────────────
  {
    slug: "donde-comer",
    group: "comida",
    title: "Dónde comer en Paseo de la Costa: opciones y zonas",
    description:
      "Cómo elegir dónde comer cerca de Paseo de la Costa en Neuquén según el momento, el presupuesto y el grupo, y qué verificar antes de ir.",
    related: ["cafeterias-y-meriendas", "food-trucks-isla-132", "cervecerias-y-bares", "isla-132"],
    content: {
      kicker: "Comer y beber en la ribera",
      h1: "Dónde comer cerca de Paseo de la Costa",
      lead: "Cerca de los accesos urbanos suele haber opciones para comer y beber, desde cafeterías hasta locales de comida. Esta guía describe categorías y zonas de referencia; verificá siempre horarios y datos con cada local.",
      linkLabel: "Dónde comer",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Elegí según el momento",
          paragraphs: [
            "Para un desayuno o una merienda, buscá cafeterías y locales de repostería cerca de los accesos. Para almuerzo o cena, apuntá a los sectores con más oferta gastronómica y, si querés vista al río, elegí los locales que lo declaran.",
          ],
          bullets: [
            "Mañana: cafeterías y meriendas.",
            "Mediodía: restaurantes y opciones de almuerzo.",
            "Tarde: heladerías y locales de paseo.",
            "Noche: bares y cervecerías con ambiente.",
          ],
        },
        {
          heading: "Comercios de referencia por zona",
          paragraphs: [
            "En el entorno de Isla 132 y la costanera aparecen opciones conocidas como Los Carritos (espacio de comida y carritos), Lucciano's como heladería de paseo, y la propuesta de Cerveza Patagonia – Refugio Neuquén para una cervecería con ambiente. Son referencias para ubicar el tipo de oferta, no una recomendación cerrada.",
          ],
          callout:
            "No confirmamos horarios, carta ni precios de estos comercios. Verificá la información oficial de cada local antes de ir: la oferta y la temporada cambian.",
        },
        {
          heading: "Antes de sentarte",
          paragraphs: [
            "Confirmá si el local tiene vista al río, si acepta reservas y si conviene para niños o grupos. Llevá tu propia agua en verano y, si el local está muy concurrido, considerá un acceso alternativo cercano.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Hay restaurantes con vista al río?",
          a: "Algunos locales del entorno ribereño declaran vista al río, pero conviene confirmarlo al reservar. Revisá la guía de almuerzo con vista al río para más detalles.",
        },
        {
          q: "¿Dónde hay food trucks o comida rápida?",
          a: "En el entorno de Isla 132 suele haber un espacio de carritos y comida al aire libre. Revisá la guía de food trucks de Isla 132.",
        },
        {
          q: "¿Hay opciones para celiacos o dietas especiales?",
          a: "No podemos confirmarlo de forma general. Consultá la carta o el local directamente antes de ir.",
        },
        {
          q: "¿Puedo llevar comida y comer en el paseo?",
          a: "En espacios abiertos suele ser posible, pero llevate tus residuos. No dejes basura en la ribera y respetá las áreas habilitadas.",
        },
        {
          q: "¿La guía recomienda un comercio concreto?",
          a: "No. Esta guía describe categorías y comercios de referencia para que ubiques la oferta; las decisiones de compra y los datos del local los confirmás con cada establecimiento.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 8. Food trucks Isla 132
  // ─────────────────────────────────────────────────────────────
  {
    slug: "food-trucks-isla-132",
    group: "comida",
    title: "Food trucks en Isla 132: dónde comer al aire libre",
    description:
      "El espacio de carritos y comida al aire libre en Isla 132, cómo se organiza, qué tener en cuenta por clima y cómo combinarlo con el paseo.",
    related: ["donde-comer", "cafeterias-y-meriendas", "isla-132", "con-ninos"],
    content: {
      kicker: "Comer y beber en la ribera",
      h1: "Food trucks y carritos en Isla 132",
      lead: "Isla 132 concentra un espacio de comida al aire libre donde suelen reunirse carritos y opciones para comer durante el paseo. Es una forma práctica de comer sin entrar a un restaurante.",
      linkLabel: "Food trucks Isla 132",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Qué encontrar",
          paragraphs: [
            "Como referencia del sector, Los Carritos aparece como un espacio de comida y carritos en la zona. La oferta cambia según el día y la temporada, así que conviene ir con flexibilidad.",
          ],
          bullets: [
            "Comida rápida y callejera.",
            "Opciones para compartir entre amigos.",
            "Helados y bebidas para el paseo.",
          ],
        },
        {
          heading: "Por clima y temporada",
          paragraphs: [
            "El espacio al aire libre depende del clima. En días de viento o lluvia la oferta puede reducirse; en temporada alta suele haber más carritos y más concurrencia.",
          ],
          callout:
            "No confirmamos horarios ni qué carritos están presentes cada día. Verificá en el lugar la oferta vigente.",
        },
        {
          heading: "Cómo combinarlo con el paseo",
          paragraphs: [
            "Es ideal para una pausa después de caminar un tramo. Si vas con niños o en grupo, coordiná el punto de encuentro antes, porque el sector puede estar concurrido.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Los food trucks funcionan todos los días?",
          a: "No tenemos un calendario confirmado. La presencia de carritos cambia por día y temporada; verificá en el lugar.",
        },
        {
          q: "¿Hay opciones vegetarianas?",
          a: "No podemos confirmarlo de forma general. Consultá directamente con los carritos el día de la visita.",
        },
        {
          q: "¿Se puede pagar con tarjeta?",
          a: "No confirmamos medios de pago. Llevá efectivo como respaldo en espacios de carritos.",
        },
        {
          q: "¿Hay mesas o dónde comer?",
          a: "Suele haber áreas de descanso cerca, pero la disponibilidad varía. Llevate lo necesario para sentarte cómodo y no dejes residuos.",
        },
        {
          q: "¿Es lugar para ir con niños?",
          a: "Sí, el espacio abierto suele ser apto para familias, pero supervisá a los niños cerca del río y del movimiento de personas.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 9. Cafeterías y meriendas
  // ─────────────────────────────────────────────────────────────
  {
    slug: "cafeterias-y-meriendas",
    group: "comida",
    title: "Cafeterías y meriendas en Paseo de la Costa",
    description:
      "Dónde tomar un café, desayunar o merendar cerca de Paseo de la Costa: opciones de referencia, horarios y cómo combinarlo con la caminata.",
    related: ["donde-comer", "food-trucks-isla-132", "recorridos/una-hora", "isla-132"],
    content: {
      kicker: "Comer y beber en la ribera",
      h1: "Cafeterías y meriendas en la ribera",
      lead: "Para un desayuno, una tarde de café o una merienda después de caminar, los accesos urbanos y el entorno de Isla 132 suelen tener cafeterías y locales de repostería.",
      linkLabel: "Cafeterías y meriendas",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Opciones de referencia",
          paragraphs: [
            "Café Lina y Morena del Río aparecen como cafeterías de referencia en la zona ribereña y urbana cercana. Son puntos para ubicar el tipo de oferta, no una recomendación cerrada.",
          ],
          bullets: [
            "Café Lina: referencia de café y merienda.",
            "Morena del Río: cafetería cercana al entorno ribereño.",
            "Locales de repostería y desayuno en accesos urbanos.",
          ],
        },
        {
          heading: "Cuándo ir",
          paragraphs: [
            "Las primeras horas son ideales para un desayuno tranquilo; la tarde, para una merienda después de caminar. Confirmá el horario de cada local, porque pueden variar por día y temporada.",
          ],
          callout:
            "No confirmamos horarios ni carta de estos comercios. Verificá la información oficial de cada local antes de ir.",
        },
        {
          heading: "Combinálo con el paseo",
          paragraphs: [
            "Elegí un acceso con cafeterías cerca, hacé una pausa y retomá el recorrido. Para una primera visita corta, revisá el recorrido de una hora.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Hay cafeterías con terraza o vista?",
          a: "Algunos locales del entorno ribereño pueden tener sector al aire libre; confirmalo con el local. No asumás vista al río sin verificarlo.",
        },
        {
          q: "¿Abren temprano para desayunar?",
          a: "No confirmamos horarios. Consultá el local directamente antes de ir.",
        },
        {
          q: "¿Conviene para una merienda con niños?",
          a: "Sí, las cafeterías y meriendas suelen ser aptas para familias. Supervisá a los niños cerca del río.",
        },
        {
          q: "¿Hay opciones para llevar?",
          a: "Muchas cafeterías ofrecen para llevar, pero confirmalo en el local. Llevá tu propia botella de agua en verano.",
        },
        {
          q: "¿La guía recomienda un café concreto?",
          a: "No. Mencionamos comercios de referencia para que ubiques la oferta; los datos y la decisión los confirmás con cada establecimiento.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 10. Con niños
  // ─────────────────────────────────────────────────────────────
  {
    slug: "con-ninos",
    group: "decision",
    title: "Visita a Paseo de la Costa con niños",
    description:
      "Cómo visitar Paseo de la Costa con niños en Neuquén: tramos aptos, descanso, seguridad en el río y un recorrido de una hora en familia.",
    related: ["isla-132", "seguridad-en-el-rio-limay", "recorridos/una-hora", "estacionamiento"],
    content: {
      kicker: "Para planificar la visita",
      h1: "Paseo de la Costa con niños",
      lead: "Los senderos de baja dificultad y las áreas de descanso hacen que el paseo sea apto para familias, pero el borde del río requiere supervisión constante.",
      linkLabel: "Con niños",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Tramos y descanso",
          paragraphs: [
            "Elegí accesos centrales con sectores pavimentados o de baja dificultad, cerca de miradores y de los baños señalados. Dejá margen para pausas y llevá agua y protección solar.",
          ],
          bullets: [
            "Cochecito: preferí tramos pavimentados.",
            "Pausas: usá las áreas de descanso señalizadas.",
            "Sombra: puede ser escasa; llevá protección.",
          ],
        },
        {
          heading: "Seguridad en el agua",
          paragraphs: [
            "Mantenete en senderos y sectores habilitados, y no te acerques al borde inestable del agua. El río es cambiante; no asumás condiciones de baño.",
          ],
          callout:
            "La supervisión de los niños cerca del río es responsabilidad de cada familia. No dejes que se acerquen solos a la orilla.",
        },
        {
          heading: "Un recorrido corto en familia",
          paragraphs: [
            "Para una primera visita con niños, una hora puede alcanzar para caminar un tramo, mirar el río y merendar. Revisá el recorrido de una hora para una idea de ruta.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Es apto para bebés en cochecito?",
          a: "Sí, en tramos pavimentados y accesos centrales. Evitá senderos de tierra y planificá el baño más cercano antes de salir.",
        },
        {
          q: "¿Hay baños donde cambiar a un bebé?",
          a: "Hay un módulo de baños públicos informado para un tramo del Paseo Costero Río Limay cercano a Club Unipol, pero la disponibilidad y el horario varían. Confirmalo en el día.",
        },
        {
          q: "¿Qué llevar para ir con niños?",
          a: "Agua, protector solar, una capa extra si cambia el viento, snacks y algo de entretenimiento para las pausas. No dejes residuos en la ribera.",
        },
        {
          q: "¿Dónde comer con niños?",
          a: "Cerca de los accesos hay opciones de comida y bebida. Revisá la guía de dónde comer y la de food trucks de Isla 132.",
        },
        {
          q: "¿Hay juegos o actividades para niños?",
          a: "El paseo es principalmente recreativo y de contemplación. No confirmamos juegos específicos; consultá la oferta del día en el lugar.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 11. Recorrido de una hora
  // ─────────────────────────────────────────────────────────────
  {
    slug: "recorridos/una-hora",
    group: "recorridos",
    title: "Recorrido de una hora por Paseo de la Costa",
    description:
      "Un recorrido de una hora por Paseo de la Costa en Neuquén: qué tramo priorizar, dónde mirar el río y cómo aprovechar la pausa.",
    related: ["mapa", "isla-132", "con-ninos", "cafeterias-y-meriendas"],
    content: {
      kicker: "Recorridos y rutas",
      h1: "Recorrido de una hora por la ribera",
      lead: "Si tenés poco tiempo, priorizá un tramo: caminá hacia un mirador, mirá el río y volvé con margen para una pausa. No intentes recorrer todo el paseo en sesenta minutos.",
      linkLabel: "Recorrido de 1 hora",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Elegí el acceso y el tramo",
          paragraphs: [
            "Para una hora, elegí un acceso urbano central y caminá un tramo lineal hacia un mirador o la zona de descanso. Dejá la confluencia y los tramos lejanos para otra visita.",
          ],
          bullets: [
            "0–15 min: llegada y orientación en el acceso elegido.",
            "15–40 min: caminata tranquila junto al río.",
            "40–55 min: pausa en mirador o área de descanso.",
            "55–60 min: regreso al punto de partida.",
          ],
        },
        {
          heading: "Qué mirar",
          paragraphs: [
            "El río Limay y la vegetación ribereña son el foco principal. Si vas a la mañana o al final de la tarde, la luz es más suave para mirar y fotografiar.",
          ],
          callout:
            "No te acerques al borde inestable del agua. Una hora de paseo se disfruta desde los senderos y miradores habilitados.",
        },
        {
          heading: "Cómo aprovechar la pausa",
          paragraphs: [
            "Llevá agua y, si querés, sumá una merienda en una cafetería cercana. Para una visita con niños, revisá la guía de visita con niños.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Se puede recorrer todo el paseo en una hora?",
          a: "No conviene. El paseo suma varios kilómetros; para una hora, priorizá un tramo y mirá el río con calma.",
        },
        {
          q: "¿Cuál es el mejor horario?",
          a: "Las primeras horas y el final de la tarde suelen tener luz más suave y menos calor. En verano, evitá las horas centrales.",
        },
        {
          q: "¿El recorrido es apto para principiantes?",
          a: "Sí, los senderos principales son de baja dificultad. Elegí tramos pavimentados si vas con cochecito o movilidad reducida.",
        },
        {
          q: "¿Dónde estacionar para este recorrido?",
          a: "En los accesos urbanos centrales. Revisá la guía de estacionamiento para elegir el sector.",
        },
        {
          q: "¿Puedo combinarlo con algo de comer?",
          a: "Sí, sumá una merienda en una cafetería cercana. Revisá la guía de cafeterías y meriendas.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 12. Balneario Río Grande
  // ─────────────────────────────────────────────────────────────
  {
    slug: "cerca/balneario-rio-grande",
    group: "cerca",
    title: "Balneario Río Grande: cómo llegar desde Paseo de la Costa",
    description:
      "Balneario Río Grande como extensión de la ribera de Neuquén: cómo llegar desde los accesos principales, qué actividades y qué verificar.",
    related: ["mapa", "seguridad-en-el-rio-limay", "como-llegar", "isla-132"],
    content: {
      kicker: "Alrededores de la costanera",
      h1: "Balneario Río Grande: un nodo ribereño extendido",
      lead: "Balneario Río Grande es otro nodo de la ribera neuquina, alejado del núcleo de Isla 132. No está a pocos minutos a pie del paseo principal: planificá el acceso por separado.",
      linkLabel: "Balneario Río Grande",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "No es el mismo paseo",
          paragraphs: [
            "Aunque ambos están sobre la costanera de Neuquén, Balneario Río Grande no es un tramo contiguo a Isla 132. La distancia real depende de tu punto de partida y del medio de transporte.",
          ],
        },
        {
          heading: "Cómo llegar",
          paragraphs: [
            "Llegá en vehículo, taxi o transporte urbano, eligiendo la ruta que deje cerca del balneario. No asumás que está a distancia caminable desde los accesos centrales del paseo.",
          ],
          bullets: [
            "En auto o taxi: seguí la señalización hacia el balneario.",
            "En transporte urbano: consultá la línea y el descenso el mismo día.",
          ],
        },
        {
          heading: "Qué verificar",
          paragraphs: [
            "Como espacio de río, aplican las mismas precauciones que en el resto de la costanera: corriente y nivel cambiantes, y ninguna habilitación de baño asumida sin señalización oficial.",
          ],
          callout:
            "No confirmamos horarios ni habilitaciones de Balneario Río Grande. Verificá las condiciones vigentes con la municipalidad o en el lugar.",
        },
      ],
      faq: [
        {
          q: "¿Está cerca de Isla 132?",
          a: "No está a pocos minutos a pie. Es un nodo ribereño separado; planificá el acceso por su cuenta.",
        },
        {
          q: "¿Se puede bañar en Balneario Río Grande?",
          a: "No asumás habilitación para baño. El río es cambiante; seguí la señalización y las pautas oficiales antes de acercarte al agua.",
        },
        {
          q: "¿Cómo llegar en transporte público?",
          a: "La red urbana conecta distintos puntos, pero líneas y frecuencias cambian. Consultá el planificador oficial el día de la visita.",
        },
        {
          q: "¿Hay estacionamiento?",
          a: "No confirmamos capacidad ni tarifa. Revisá en el lugar las indicaciones de estacionamiento.",
        },
        {
          q: "¿Conviene combinarlo con Paseo de la Costa?",
          a: "Podés sumarlo como una extensión de día, pero no como una caminata continua desde Isla 132. Organizá el transporte entre ambos puntos.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Phase 3 (15 pages)
  // ─────────────────────────────────────────────────────────────

  // 13. Qué hacer
  {
    slug: "que-hacer",
    group: "decision",
    title: "Qué hacer en Paseo de la Costa: actividades y planes",
    description:
      "Qué hacer en Paseo de la Costa según el tiempo y el grupo: caminatas, miradores, ciclismo, picnic y opciones para familias junto al río Limay.",
    related: ["mapa", "isla-132", "recorridos/una-hora", "recorridos/dos-horas", "con-ninos", "en-bicicleta", "donde-comer", "seguridad-en-el-rio-limay"],
    content: {
      kicker: "Para planificar la visita",
      h1: "Qué hacer en Paseo de la Costa",
      lead: "El paseo costero de Neuquén ofrece caminatas de baja dificultad, miradores del río Limay, ciclismo y espacios de descanso. Elegí la actividad según el tiempo, el grupo y la época del año.",
      linkLabel: "Qué hacer",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Caminar y mirar el río",
          paragraphs: [
            "El recorrido principal es lineal y de baja dificultad, ideal para una primera visita. Caminá a tu ritmo, detenete en los miradores y aprovechá la sombra donde la haya.",
          ],
          bullets: [
            "Caminata tranquila junto al río Limay.",
            "Miradores y áreas de descanso.",
            "Senderos pavimentados en varios accesos.",
          ],
        },
        {
          heading: "En bicicleta",
          paragraphs: [
            "Las bicisendas unen varios tramos del paseo. Si venís en bici o usás el sistema público, revisá la guía de ciclismo y llevá candado.",
          ],
          callout:
            "No dejes el río para actividades no confirmadas. Seguí la señalización y las pautas oficiales antes de acercarte al agua.",
        },
        {
          heading: "Descanso y comida",
          paragraphs: [
            "Cerca de los accesos urbanos hay opciones para comer y beber. Reunimos categorías y zonas en la guía de dónde comer.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Qué se puede hacer gratis?",
          a: "Caminar, mirar el río y usar las áreas de descanso son actividades de acceso libre. Servicios o actividades puntuales pueden tener sus propias condiciones.",
        },
        {
          q: "¿Conviene para una primera visita?",
          a: "Sí. Elegí un tramo, caminá unos minutos y volvé. No intentes recorrer todo el paseo en una sola salida.",
        },
        {
          q: "¿Hay actividades para niños?",
          a: "Los senderos de baja dificultad y las áreas de descanso lo hacen apto para familias. Revisá la guía de visita con niños.",
        },
        {
          q: "¿Se puede andar en bicicleta?",
          a: "Sí, en las bicisendas. Revisá la guía de ciclismo por rutas y precauciones.",
        },
        {
          q: "¿Qué llevar?",
          a: "Agua, protector solar, una capa extra si cambia el viento y snacks. No dejes residuos en la ribera.",
        },
      ],
    },
  },

  // 14. Servicios y baños
  {
    slug: "servicios-y-banos",
    group: "decision",
    title: "Servicios y baños en Paseo de la Costa",
    description:
      "Dónde están los baños públicos, agua, descanso y sombra en Paseo de la Costa de Neuquén, y qué servicios dependen del tramo y la temporada.",
    related: ["estacionamiento", "horarios-y-acceso", "con-ninos", "accesibilidad", "mapa"],
    content: {
      kicker: "Para planificar la visita",
      h1: "Servicios y baños en Paseo de la Costa",
      lead: "Los servicios puntuales (baños, agua, descanso) dependen del tramo y la temporada. Esta guía describe qué tipo de servicios buscar y cómo ubicarlos sin asumir disponibilidad fija.",
      linkLabel: "Servicios y baños",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Baños públicos",
          paragraphs: [
            "Hay un módulo de baños públicos informado para un tramo del Paseo Costero Río Limay cercano a Club Unipol, pero la disponibilidad y el horario pueden variar. Confirmalo en el día y elegí el acceso más conveniente.",
          ],
          callout:
            "No asumás que todos los accesos tienen baños. Planificá el baño más cercano antes de recorrer tramos largos.",
        },
        {
          heading: "Agua y descanso",
          paragraphs: [
            "Llevá tu propia agua, especialmente en verano. Las áreas de descanso señalizadas son los puntos para detenerse y reponerse.",
          ],
          bullets: [
            "Bebida: llevá agua propia.",
            "Descanso: buscá las áreas señalizadas.",
            "Sombra: puede ser escasa en tramos abiertos.",
          ],
        },
        {
          heading: "Sombra y confort",
          paragraphs: [
            "Parte del paseo es abierto y con poca sombra natural. Visitá temprano o al final de la tarde en los meses cálidos, y usá protección solar.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Hay baños en todos los accesos?",
          a: "No. Un módulo cercano a Club Unipol está informado, pero confirmalo en el día; otros accesos pueden no tener servicio.",
        },
        {
          q: "¿Dónde hay agua potable?",
          a: "No confirmamos bebederos fijos. Llevá tu propia botella y rellenala antes de salir.",
        },
        {
          q: "¿Hay lugares para sentarse?",
          a: "Sí, en las áreas de descanso señalizadas. Llevá algo para sentarte cómodo si planeás una pausa larga.",
        },
        {
          q: "¿Hay sombra?",
          a: "En tramos abierto es limitada. Visitá temprano o al atardecer en verano.",
        },
        {
          q: "¿Qué servicios cambian por temporada?",
          a: "Actividades y módulos puntuales suelen ajustarse en temporada alta. Verificá en el lugar.",
        },
      ],
    },
  },

  // 15. Accesibilidad
  {
    slug: "accesibilidad",
    group: "decision",
    title: "Accesibilidad en Paseo de la Costa: sillas y cochecitos",
    description:
      "Accesibilidad de Paseo de la Costa en Neuquén: tramos pavimentados, sillas de ruedas, cochecitos, rampas y obstáculos a considerar.",
    related: ["con-ninos", "servicios-y-banos", "estacionamiento", "horarios-y-acceso", "mapa"],
    content: {
      kicker: "Para planificar la visita",
      h1: "Accesibilidad en Paseo de la Costa",
      lead: "Varios accesos urbanos tienen tramos pavimentados y de baja dificultad, aptos para sillas de ruedas y cochecitos. La disponibilidad exacta depende del tramo; confirmala antes de salir.",
      linkLabel: "Accesibilidad",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Tramos pavimentados",
          paragraphs: [
            "Los accesos centrales suelen tener senderos pavimentados o de superficie estable, más cómodos para movilidad reducida y cochecitos. Evitá los tramos de tierra o con pendiente.",
          ],
          bullets: [
            "Buscá accesos urbanos centrales.",
            "Preferí superficies pavimentadas.",
            "Evitá senderos de tierra o con barro.",
          ],
        },
        {
          heading: "Sillas de ruedas y cochecitos",
          paragraphs: [
            "Un cochecito o silla de ruedas puede recorrer los tramos pavimentados sin mayor dificultad. Llevá una rueda de repuesto y evitá las horas de más calor.",
          ],
          callout:
            "No todos los tramos son accesibles. Confirmá el acceso elegido y el baño más cercano antes de recorrer distancias.",
        },
        {
          heading: "Obstáculos a considerar",
          paragraphs: [
            "El borde del río, las escaleras eventuales y la falta de sombra pueden complicar el recorrido. Planificá pausas y llevá agua.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Es accesible en silla de ruedas?",
          a: "Varios tramos pavimentados sí lo son; depende del acceso. Confirmalo en el día.",
        },
        {
          q: "¿Se puede ir con cochecito?",
          a: "Sí, en tramos pavimentados. Evitá la tierra y el barro.",
        },
        {
          q: "¿Hay rampas?",
          a: "En los accesos urbanos suele haber pendientes suaves, pero no confirmamos rampas en todos los puntos.",
        }, {
          q: "¿Dónde estacionar cerca?",
          a: "En los accesos urbanos centrales. Revisá la guía de estacionamiento.",
        },
        {
          q: "¿Hay sombra y descanso?",
          a: "Limitada. Visitá temprano o al atardecer y usá protección solar.",
        },
      ],
    },
  },

  // 16. Cuándo ir
  {
    slug: "cuando-ir",
    group: "decision",
    title: "Cuándo ir a Paseo de la Costa: temporadas y horarios",
    description:
      "Mejor época para visitar Paseo de la Costa en Neuquén: clima por estación, luz, viento, calor y cuándo evitar las horas centrales.",
    related: ["horarios-y-acceso", "seguridad-en-el-rio-limay", "servicios-y-banos", "con-ninos"],
    content: {
      kicker: "Para planificar la visita",
      h1: "Cuándo ir a Paseo de la Costa",
      lead: "El paseo se visita todo el año, pero la experiencia cambia con la estación: verano con calor y más gente, invierno con frío y poca concurrencia. Elegí el momento según tu comodidad.",
      linkLabel: "Cuándo ir",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Por estación",
          paragraphs: [
            "En verano, preferí las primeras horas y el final de la tarde para evitar el calor. En otoño e invierno, el mediodía suele ser el momento más cómodo.",
          ],
          bullets: [
            "Primavera y otoño: luz suave y temperaturas moderadas.",
            "Verano: evitá las horas centrales.",
            "Invierno: abrigate y aprovechá el mediodía.",
          ],
        },
        {
          heading: "Luz y viento",
          paragraphs: [
            "El viento en la ribera puede ser fuerte. Llevá una prenda cortaviento y revisá el pronóstico antes de salir.",
          ],
          callout:
            "El módulo de clima de esta guía es una estimación meteorológica; no informa el estado del río ni habilita actividades acuáticas.",
        },
        {
          heading: "Concurrencia",
          paragraphs: [
            "Los fines de semana y feriados suelen tener más gente y menos lugar para estacionar. Si podés, elegí un día de diario o llegá temprano.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Cuál es la mejor época?",
          a: "Primavera y otoño suelen ser las más cómodas por temperatura y luz.",
        },
        {
          q: "¿A qué hora conviene ir en verano?",
          a: "Temprano o al atardecer, para evitar el calor y la fuerte radiación.",
        },
        {
          q: "¿Hay mucho viento?",
          a: "La ribera puede ser ventosa. Llevá cortaviento y revisá el pronóstico.",
        },
        {
          q: "¿Cuándo hay más gente?",
          a: "Fines de semana y feriados, sobre todo en temporada cálida.",
        },
        {
          q: "¿Se puede ir en invierno?",
          a: "Sí, con abrigo. El mediodía es el momento más cómodo.",
        },
      ],
    },
  },

  // 17. Desde el centro
  {
    slug: "desde-el-centro",
    group: "transporte",
    title: "Cómo llegar desde el centro de Neuquén al paseo",
    description:
      "Cómo ir desde el centro de Neuquén a Paseo de la Costa: distancia aproximada, colectivo, taxi, auto y bicicleta, y qué acceso conviene.",
    related: ["como-llegar", "estacionamiento", "en-bicicleta", "colectivos", "mapa"],
    content: {
      kicker: "Cómo llegar",
      h1: "Desde el centro de Neuquén al paseo",
      lead: "El centro y la costanera están relativamente cerca, pero la distancia real depende del acceso que elijas. Podés ir a pie, en bici, colectivo o taxi.",
      linkLabel: "Desde el centro",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "A pie o en bici",
          paragraphs: [
            "Varios accesos urbanos quedan a una caminata o pedalada corta desde el centro. Es la opción más simple si no llevás auto.",
          ],
          bullets: [
            "A pie: elegí el acceso urbano más cercano.",
            "En bici: usá las ciclovías y llevá candado.",
            "Tiempo: varía según el acceso.",
          ],
        },
        {
          heading: "Colectivo o taxi",
          paragraphs: [
            "Las líneas urbanas conectan el centro con distintos accesos, pero líneas y frecuencias cambian. Consultá el planificador oficial el día de la visita.",
          ],
          callout:
            "No asumás que todos los accesos están a distancia caminable del centro. Confirmá el punto de partida y el acceso elegido.",
        },
        {
          heading: "En auto",
          paragraphs: [
            "Si venís en auto, elegí el acceso con estacionamiento y llegá con margen en horas de mayor concurrencia.",
          ],
        },
      ],
      faq: [
        {
          q: "¿El paseo está caminando desde el centro?",
          a: "Algunos accesos urbanos, sí; otros requieren transporte. Confirmá según el acceso.",
        },
        {
          q: "¿Hay colectivo del centro al paseo?",
          a: "La red urbana conecta distintos puntos, pero líneas y frecuencias cambian: consultá el día de la visita.",
        },
        {
          q: "¿Conviene ir en bici?",
          a: "Sí, si el acceso queda cerca. Respetá las ciclovías y llevá candado.",
        },
        {
          q: "¿Cuánto tarda en auto?",
          a: "Depende del acceso y del tránsito. No asumás tiempos fijos.",
        },
        {
          q: "¿Dónde estacionar?",
          a: "En los accesos urbanos. Revisá la guía de estacionamiento.",
        },
      ],
    },
  },

  // 18. En bicicleta
  {
    slug: "en-bicicleta",
    group: "transporte",
    title: "Paseo de la Costa en bicicleta: ciclovías y rutas",
    description:
      "Cómo recorrer Paseo de la Costa en bicicleta en Neuquén: ciclovías, sistema público SiBici, seguridad y qué llevar.",
    related: ["como-llegar", "desde-el-centro", "colectivos", "que-hacer", "seguridad-en-el-rio-limay"],
    content: {
      kicker: "Cómo llegar",
      h1: "Paseo de la Costa en bicicleta",
      lead: "Las bicisendas unen varios tramos del paseo costero, lo que lo hace ideal para recorrerlo en bici o usar el sistema público de la ciudad.",
      linkLabel: "En bicicleta",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Ciclovías del paseo",
          paragraphs: [
            "El sistema de ciclovías conecta distintos puntos de la costanera. Respetá la convivencia con peatones y bajá la velocidad donde haya más gente.",
          ],
          bullets: [
            "Usá las ciclovías señalizadas.",
            "Bajá la velocidad en zonas concurridas.",
            "Cedé el paso a peatones.",
          ],
        },
        {
          heading: "Sistema público SiBici",
          paragraphs: [
            "La ciudad cuenta con un sistema público de bicicletas (SiBici) con registro propio. Tarifas, estaciones y reglas de uso deben confirmarse en la fuente oficial antes de usarla.",
          ],
          callout:
            "No confirmamos tarifas ni disponibilidad de estaciones. Revisá el registro oficial de SiBici para usarla.",
        },
        {
          heading: "Seguridad y equipo",
          paragraphs: [
            "Llevá candado, agua y protección solar. No dejes el río para actividades no confirmadas y respetá la señalización.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Se puede recorrer en bicicleta?",
          a: "Sí, en las ciclovías que unen varios tramos.",
        },
        {
          q: "¿Hay bicicleta pública?",
          a: "La ciudad tiene SiBici, pero tarifas y estaciones deben confirmarse en la fuente oficial.",
        },
        {
          q: "¿Necesito casco?",
          a: "Se recomienda uso de casco y respeto de las normas de tránsito.",
        },
        {
          q: "¿Llevás candado?",
          a: "Sí, y no dejes la bici sin asegurar.",
        },
        {
          q: "¿Qué rutas convienen?",
          a: "Las ciclovías de la costanera. Elegí el tramo según tu punto de partida.",
        },
      ],
    },
  },

  // 19. Colectivos
  {
    slug: "colectivos",
    group: "transporte",
    title: "Colectivos urbanos a Paseo de la Costa",
    description:
      "Líneas de colectivos urbanos para llegar a Paseo de la Costa en Neuquén: cómo consultar rutas, paradas y frecuencias cambiantes.",
    related: ["como-llegar", "desde-el-centro", "desde-la-terminal", "en-bicicleta", "estacionamiento"],
    content: {
      kicker: "Cómo llegar",
      h1: "Colectivos urbanos al paseo",
      lead: "La red de colectivos urbanos de Neuquén conecta el centro y distintos accesos de la costanera. Las líneas y frecuencias cambian, así que consultalas el mismo día.",
      linkLabel: "En colectivo",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Cómo consultar",
          paragraphs: [
            "Usá el planificador oficial de transporte urbano para ver líneas, paradas y horarios vigentes. No nos basamos en recorridos fijos porque cambian.",
          ],
          bullets: [
            "Consultá el planificador oficial.",
            "Bajá en un acceso señalizado.",
            "Confirmá la línea el día de la visita.",
          ],
        },
        {
          heading: "Desde la terminal",
          paragraphs: [
            "Si llegás en ómnibus de larga distancia, desde la terminal podés combinar con transporte urbano o taxi hacia el acceso elegido.",
          ],
        },
        {
          heading: "Consejos",
          paragraphs: [
            "Llevá efectivo o tarjeta según lo que indique la línea, y salí con margen porque las frecuencias variables pueden retrasarte.",
          ],
          callout:
            "No confirmamos números de línea ni tarifas. La red urbana cambia; consultá la fuente oficial el día de la visita.",
        },
      ],
      faq: [
        {
          q: "¿Qué colectivo va al paseo?",
          a: "Depende del acceso; consultá el planificador oficial urbano el día de la visita.",
        },
        {
          q: "¿Desde la terminal hay combinación?",
          a: "Sí, con transporte urbano o taxi hacia el acceso elegido.",
        },
        {
          q: "¿Cuánto cuesta?",
          a: "No confirmamos tarifas; consultá la línea.",
        },
        {
          q: "¿Con qué pago?",
          a: "Según lo que indique la línea; llevá efectivo como respaldo.",
        },
        {
          q: "¿Bajás cerca del río?",
          a: "Elegí la parada más cercana al acceso señalizado que vayas a usar.",
        },
      ],
    },
  },

  // 20. Desde Plottier
  {
    slug: "desde-plottier",
    group: "transporte",
    title: "Cómo llegar desde Plottier a Paseo de la Costa",
    description:
      "Cómo ir desde Plottier a Paseo de la Costa en Neuquén: distancia, ruta, auto, colectivo y tiempos aproximados a confirmar.",
    related: ["como-llegar", "desde-el-centro", "estacionamiento", "colectivos", "en-bicicleta"],
    content: {
      kicker: "Cómo llegar",
      h1: "Desde Plottier al paseo",
      lead: "Plottier queda al sur de Neuquén, a una distancia en auto que depende del tránsito y del acceso que elijas en la costanera.",
      linkLabel: "Desde Plottier",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "En auto",
          paragraphs: [
            "Por ruta o avenidas de acceso, Plottier conecta con Neuquén y la costanera. Elegí el acceso con estacionamiento y salí con margen.",
          ],
          bullets: [
            "Auto: seguí la señalización vial.",
            "Tiempo: variable según tránsito.",
            "Acceso: elegí el más conveniente.",
          ],
        },
        {
          heading: "Transporte público",
          paragraphs: [
            "Hay servicios que unen Plottier con Neuquén; líneas y frecuencias cambian, así que consultalos el día de la visita y bajá en un acceso señalizado.",
          ],
          callout:
            "No confirmamos horarios ni tarifas desde Plottier. Consultá las fuentes oficiales de transporte el mismo día.",
        },
        {
          heading: "En bicicleta",
          paragraphs: [
            "La distancia es mayor que desde el centro; la ciclovía puede no cubrir todo el trayecto. Evaluá la condición física y llevá agua.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Cuánto tarda desde Plottier?",
          a: "Depende del tránsito y del acceso; no asumás tiempos fijos.",
        },
        {
          q: "¿Hay colectivo?",
          a: "Servicios unen Plottier con Neuquén, pero líneas y frecuencias cambian: consultá el día de la visita.",
        },
        {
          q: "¿Conviene en auto?",
          a: "Sí, eligiendo el acceso con estacionamiento.",
        },
        {
          q: "¿Se puede en bici?",
          a: "La distancia es mayor; evaluá tu condición y llevá agua.",
        },
        {
          q: "¿Dónde estacionar?",
          a: "En los accesos urbanos de la costanera. Revisá la guía de estacionamiento.",
        },
      ],
    },
  },

  // 21. Restaurantes Isla 132
  {
    slug: "restaurantes-isla-132",
    group: "comida",
    title: "Restaurantes en Isla 132: dónde comer",
    description:
      "Restaurantes y opciones para almorzar en Isla 132 y su entorno en Paseo de la Costa: cómo llegar, tipo de cocina y qué verificar.",
    related: ["donde-comer", "isla-132", "food-trucks-isla-132", "cafeterias-y-meriendas", "cenar-en-la-costanera"],
    content: {
      kicker: "Comer y beber en la ribera",
      h1: "Restaurantes en Isla 132",
      lead: "Isla 132 concentra opciones para comer en la ribera. Como referencia de zona aparecen Damiana (restaurante) y la propuesta de Cerveza Patagonia – Refugio Neuquén para una cervecería con ambiente; confirmá siempre horarios y carta con cada local.",
      linkLabel: "Restaurantes Isla 132",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Opciones de referencia",
          paragraphs: [
            "Damiana aparece como restaurante de referencia en el entorno de Isla 132. Es un punto para ubicar el tipo de oferta gastronómica, no una recomendación cerrada.",
          ],
          bullets: [
            "Damiana: restaurante de referencia.",
            "Cerveza Patagonia – Refugio Neuquén: cervecería con ambiente.",
            "Locales de comida y bebida en el entorno.",
          ],
        },
        {
          heading: "Cómo elegir",
          paragraphs: [
            "Para almuerzo conviene un local con vista al río o cerca del acceso; para cena, las opciones con ambiente y transporte de regreso. Revisá la guía de almuerzo con vista al río y la de cena en la costanera.",
          ],
          callout:
            "No confirmamos horarios, carta ni precios de estos comercios. Verificá la información oficial de cada local antes de ir.",
        },
        {
          heading: "Después de comer",
          paragraphs: [
            "Aprovechá para caminar un tramo del paseo o mirar el río. Revisá el recorrido de una hora o el de dos horas.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Hay restaurantes en Isla 132?",
          a: "Sí, con referencias como Damiana y Cerveza Patagonia – Refugio Neuquén; confirmá horarios con cada local.",
        },
        {
          q: "¿Conviene para almuerzo?",
          a: "Sí, si elegís un local cerca del acceso o con vista al río.",
        },
        {
          q: "¿Hay opciones para cenar?",
          a: "Sí, con ambiente y transporte de regreso; revisá la guía de cena en la costanera.",
        },
        {
          q: "¿Tienen vista al río?",
          a: "Algunos locales del entorno pueden tenerla; confirmalo al reservar.",
        },
        {
          q: "¿La guía recomienda uno?",
          a: "No. Mencionamos comercios de referencia para ubicar la oferta; los datos y la decisión los confirmás con cada local.",
        },
      ],
    },
  },

  // 22. Heladerías
  {
    slug: "heladerias",
    group: "comida",
    title: "Heladerías en Paseo de la Costa y alrededores",
    description:
      "Dónde tomar helado cerca de Paseo de la Costa en Neuquén: heladerías de referencia, cuándo ir y cómo combinarlo con la caminata.",
    related: ["donde-comer", "cafeterias-y-meriendas", "food-trucks-isla-132", "con-ninos", "isla-132"],
    content: {
      kicker: "Comer y beber en la ribera",
      h1: "Heladerías en la ribera",
      lead: "Para una pausa dulce después de caminar, las heladerías y heladerías de paseo son una opción familiar. Como referencia aparece Lucciano's en el entorno del paseo.",
      linkLabel: "Heladerías",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Dónde encontrarlas",
          paragraphs: [
            "Cerca de los accesos urbanos y en el entorno de Isla 132 suelen haber heladerías. Lucciano's aparece como heladería de paseo de referencia.",
          ],
          bullets: [
            "Lucciano's: heladería de paseo de referencia.",
            "Heladerías en accesos urbanos y Isla 132.",
            "Opción para familias tras caminar.",
          ],
        },
        {
          heading: "Cuándo ir",
          paragraphs: [
            "En los meses cálidos es la pausa más buscada; en temporada alta puede haber más cola. Llevá efectivo como respaldo.",
          ],
          callout:
            "No confirmamos horarios ni carta de las heladerías. Verificá con cada local antes de ir.",
        },
        {
          heading: "Combinarlo con el paseo",
          paragraphs: [
            "Hacé una caminata corta y cerrá con un helado. Revisá el recorrido de una hora para una idea de ruta.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Hay heladerías en el paseo?",
          a: "Sí, como Lucciano's en el entorno; confirmá horarios con el local.",
        },
        {
          q: "¿Conviene para familias?",
          a: "Sí, es una pausa dulce tras caminar.",
        },
        {
          q: "¿Abren todo el año?",
          a: "No confirmamos; consultá con cada local.",
        },
        {
          q: "¿Se puede pagar con tarjeta?",
          a: "No confirmamos; llevá efectivo como respaldo.",
        },
        {
          q: "¿Dónde comer antes o después?",
          a: "Revisá la guía de dónde comer y la de cafeterías.",
        },
      ],
    },
  },

  // 23. Cervecerías y bares
  {
    slug: "cervecerias-y-bares",
    group: "comida",
    title: "Cervecerías y bares en la costanera de Neuquén",
    description:
      "Cervecerías y bares cerca de Paseo de la Costa para la noche: opciones de referencia, ambiente y cómo volver.",
    related: ["donde-comer", "restaurantes-isla-132", "isla-132", "cenar-en-la-costanera", "de-noche"],
    content: {
      kicker: "Comer y beber en la ribera",
      h1: "Cervecerías y bares en la costanera",
      lead: "Para una salida de noche, la costanera y el entorno de Isla 132 tienen opciones de cerveza y tragos. Como referencia aparece Cerveza Patagonia – Refugio Neuquén.",
      linkLabel: "Cervecerías y bares",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Opciones de referencia",
          paragraphs: [
            "Cerveza Patagonia – Refugio Neuquén aparece como cervecería con ambiente en el entorno de Isla 132. Es un punto para ubicar la oferta, no una recomendación cerrada.",
          ],
          bullets: [
            "Cerveza Patagonia – Refugio Neuquén: cervecería con ambiente.",
            "Bares y locales de tragos cerca de la ribera.",
            "Ideal para una salida de noche.",
          ],
        },
        {
          heading: "Cómo planear la salida",
          paragraphs: [
            "Si salís de noche, definí el transporte de regreso antes, porque el transporte público reduce frecuencias en horario tardío. Revisá la guía de visita de noche.",
          ],
          callout:
            "No confirmamos horarios ni carta. Verificá la información de cada local y las pautas de la ciudad antes de salir.",
        },
        {
          heading: "Con quién ir",
          paragraphs: [
            "Es una opción para adultos y grupos; si vas con niños, preferí las opciones de comida diurnas. Revisá la guía de visita con niños.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Hay cervecería en la costanera?",
          a: "Sí, como Cerveza Patagonia – Refugio Neuquén en el entorno de Isla 132; confirmá horarios.",
        },
        {
          q: "¿Conviene para la noche?",
          a: "Sí, pero definí el transporte de regreso antes.",
        },
        {
          q: "¿Hay opciones para grupos?",
          a: "Sí, las cervecerías y bares suelen ser para grupos y adultos.",
        },
        {
          q: "¿Se puede ir con niños?",
          a: "Preferí las opciones diurnas; revisá la guía de visita con niños.",
        },
        {
          q: "¿La guía recomienda uno?",
          a: "No. Mencionamos comercios de referencia; los datos los confirmás con cada local.",
        },
      ],
    },
  },

  // 24. Sur Park
  {
    slug: "cerca/sur-park",
    group: "cerca",
    title: "Sur Park e Isla 132: cómo combinarlos",
    description:
      "Cómo combinar Sur Park con la caminata de Isla 132 en Paseo de la Costa: distancia, accesos y qué verificar.",
    related: ["isla-132", "mapa", "recorridos/dos-horas", "que-hacer", "cerca/miradores-rio-limay"],
    content: {
      kicker: "Alrededores de la costanera",
      h1: "Sur Park e Isla 132",
      lead: "Sur Park es otro nodo de la ribera neuquina cercano a Isla 132. No está a pocos pasos del paseo principal: planificá el acceso y el transporte entre ambos.",
      linkLabel: "Sur Park",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "No es el mismo paseo",
          paragraphs: [
            "Aunque ambos están sobre la costanera de Neuquén, Sur Park no es un tramo contiguo a Isla 132. La distancia real depende de tu punto de partida y del medio de transporte.",
          ],
        },
        {
          heading: "Cómo llegar",
          paragraphs: [
            "Llegá en vehículo, taxi o transporte urbano, eligiendo la ruta que deje cerca del nodo. No asumás que está a distancia caminable desde los accesos centrales.",
          ],
          bullets: [
            "En auto o taxi: seguí la señalización.",
            "En transporte urbano: consultá la línea el día de la visita.",
          ],
        },
        {
          heading: "Qué verificar",
          paragraphs: [
            "Como espacio de río, aplican las mismas precauciones que en el resto de la costanera: corriente y nivel cambiantes, y ninguna habilitación de baño asumida sin señalización oficial.",
          ],
          callout:
            "No confirmamos horarios ni habilitaciones de Sur Park. Verificá las condiciones vigentes en el lugar.",
        },
      ],
      faq: [
        {
          q: "¿Está cerca de Isla 132?",
          a: "No está a pocos minutos a pie. Es un nodo ribereño separado; organizá el acceso por separado.",
        },
        {
          q: "¿Se puede ir en transporte público?",
          a: "La red urbana conecta distintos puntos, pero líneas y frecuencias cambian: consultá el día de la visita.",
        },
        {
          q: "¿Hay estacionamiento?",
          a: "No confirmamos capacidad ni tarifa; revisá en el lugar.",
        },
        {
          q: "¿Conviene combinarlo con Isla 132?",
          a: "Podés sumarlo como una extensión de día, pero no como una caminata continua. Organizá el transporte.",
        },
        {
          q: "¿Se puede bañar?",
          a: "No asumás habilitación para baño; seguí la señalización oficial.",
        },
      ],
    },
  },

  // 25. Miradores del río Limay
  {
    slug: "cerca/miradores-rio-limay",
    group: "cerca",
    title: "Miradores del río Limay en la costanera",
    description:
      "Dónde mirar el río Limay desde Paseo de la Costa: miradores, mejores horarios para fotos y rutas entre ellos.",
    related: ["mapa", "isla-132", "que-hacer", "seguridad-en-el-rio-limay", "cerca/sur-park"],
    content: {
      kicker: "Alrededores de la costanera",
      h1: "Miradores del río Limay",
      lead: "El río Limay es el paisaje principal del paseo. Los miradores señalizados son los puntos para contemplarlo y fotografiarlo sin acercarse al borde inestable.",
      linkLabel: "Miradores del río",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Dónde mirar",
          paragraphs: [
            "A lo largo del paseo hay puntos señalizados para detenerse y mirar el río. No te acerques al borde inestable del agua para una foto.",
          ],
          bullets: [
            "Miradores señalizados a lo largo del paseo.",
            "Lugares para descansar y fotografiar.",
            "No te acerques al borde del río.",
          ],
        },
        {
          heading: "Mejor hora para fotos",
          paragraphs: [
            "La luz de la mañana y del atardecer es la más suave para fotografiar el río. En verano, evitá las horas centrales por el calor y la luz dura.",
          ],
          callout:
            "El río es cambiante; no asumás condiciones de baño ni actividades acuáticas desde los miradores.",
        },
        {
          heading: "Cómo recorrerlos",
          paragraphs: [
            "Caminá de mirador en mirador a tu ritmo y usá las áreas de descanso. Revisá el recorrido de dos horas para una ruta más completa.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Dónde están los miradores?",
          a: "A lo largo del paseo, en puntos señalizados; no te acerques al borde del agua.",
        },
        {
          q: "¿Cuál es la mejor hora para fotos?",
          a: "Mañana y atardecer, por la luz suave.",
        },
        {
          q: "¿Se puede bajar al río?",
          a: "No asumás habilitación; seguí la señalización oficial.",
        },
        {
          q: "¿Hay miradores accesibles?",
          a: "Varios accesos tienen tramos pavimentados; confirmalo según el acceso.",
        },
        {
          q: "¿Conviene para una caminata?",
          a: "Sí, de mirador en mirador; revisá el recorrido de dos horas.",
        },
      ],
    },
  },

  // 26. Recorrido de dos horas
  {
    slug: "recorridos/dos-horas",
    group: "recorridos",
    title: "Recorrido de dos horas por Paseo de la Costa",
    description:
      "Cómo aprovechar dos horas en Paseo de la Costa: ruta sugerida, miradores, descanso y dónde comer.",
    related: ["recorridos/una-hora", "que-hacer", "isla-132", "cafeterias-y-meriendas", "cerca/miradores-rio-limay"],
    content: {
      kicker: "Recorridos y rutas",
      h1: "Recorrido de dos horas por la ribera",
      lead: "Con dos horas podés caminar un tramo, detenerte en varios miradores y hacer una pausa para comer o merendar. No intentes recorrer todo el paseo.",
      linkLabel: "Recorrido de 2 horas",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Ruta sugerida",
          paragraphs: [
            "Elegí un acceso urbano central, caminá hacia un mirador, hacé una pausa y volvé con margen. Con dos horas alcanza para algo más relajado que el recorrido de una hora.",
          ],
          bullets: [
            "0–20 min: llegada y orientación.",
            "20–70 min: caminata con varios miradores.",
            "70–100 min: pausa en área de descanso.",
            "100–120 min: regreso al punto de partida.",
          ],
        },
        {
          heading: "Sumá una pausa",
          paragraphs: [
            "Aprovechá para una merienda en una cafetería cercana o un helado. Revisá la guía de cafeterías y meriendas.",
          ],
          callout:
            "No te acerques al borde inestable del agua. Disfrutá el río desde los miradores señalizados.",
        },
        {
          heading: "Si vas con niños",
          paragraphs: [
            "Dos horas permite más pausas. Revisá la guía de visita con niños y la de servicios y baños.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Se puede recorrer todo el paseo en dos horas?",
          a: "No conviene. Priorizá un tramo y mirá el río con calma.",
        },
        {
          q: "¿Qué incluir en la ruta?",
          a: "Caminata + varios miradores + una pausa para comer o merendar.",
        },
        {
          q: "¿Dónde hacer la pausa?",
          a: "En un área de descanso o una cafetería cercana.",
        },
        {
          q: "¿Conviene para niños?",
          a: "Sí, permite más pausas; revisá la guía con niños.",
        },
        {
          q: "¿Dónde estacionar?",
          a: "En los accesos urbanos centrales; revisá la guía de estacionamiento.",
        },
      ],
    },
  },

  // 27. Historia del paseo costero
  {
    slug: "historia/paseo-costero",
    group: "historia",
    title: "Historia del paseo costero de Neuquén",
    description:
      "Historia y desarrollo del paseo costero de Neuquén junto al río Limay: planificación, CORDINEU y obras recientes de senderos y ciclovías.",
    related: ["mapa", "isla-132", "que-hacer", "cerca/confluencia-de-los-rios", "naturaleza/aves-del-limay"],
    content: {
      kicker: "Historia y patrimonio",
      h1: "Historia del paseo costero",
      lead: "El paseo costero de Neuquén es el resultado de décadas de planificación de la ribera del río Limay. Organismos como CORDINEU han impulsado su desarrollo como sistema de paseos, senderos y ciclovías.",
      linkLabel: "Historia del paseo",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "De la ribera a la costanera",
          paragraphs: [
            "La costanera se consolidó como espacio público de recreación junto al río Limay. La planificación oficial buscó integrar paseo, deporte y naturaleza en un mismo corredor.",
          ],
        },
        {
          heading: "El rol de CORDINEU",
          paragraphs: [
            "CORDINEU (Corporación de Desarrollo de la Cuenca del Río Neuquén) es el organismo que ha impulsado el desarrollo y la planificación de los espacios ribereños, incluyendo el masterplan de la costanera.",
          ],
          callout:
            "Esta guía es independiente y no está afiliada a la municipalidad ni a CORDINEU. Citamos fuentes oficiales como referencia, no como respaldo.",
        },
        {
          heading: "Obras recientes",
          paragraphs: [
            "En años recientes se sumaron senderos peatonales y ciclovías a lo largo del río, ampliando las opciones de recorrido. Confirmá el estado de cada tramo en el día de la visita.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Quién desarrolló el paseo costero?",
          a: "La planificación oficial, con el impulso de organismos como CORDINEU.",
        },
        {
          q: "¿Qué es CORDINEU?",
          a: "Es el organismo de desarrollo de la cuenca del río Neuquén, referenciado en la planificación de la costanera.",
        },
        {
          q: "¿Hay obras recientes?",
          a: "Se sumaron senderos y ciclovías; confirmá el estado de cada tramo en el día.",
        },
        {
          q: "¿La guía es oficial?",
          a: "No. Es una guía independiente que cita fuentes oficiales como referencia.",
        },
        {
          q: "¿Dónde ver el masterplan?",
          a: "En la web de CORDINEU; lo mencionamos como fuente, no como validación de datos de esta guía.",
        },
      ],
    },
  },

  // 28. Desde la terminal de ómnibus
  {
    slug: "desde-la-terminal",
    group: "transporte",
    title: "Cómo llegar desde la terminal de ómnibus a Paseo de la Costa",
    description:
      "Cómo ir desde la Terminal de Ómnibus de Neuquén a Paseo de la Costa: distancia, colectivo, taxi y tiempos a confirmar.",
    related: ["como-llegar", "desde-el-centro", "colectivos", "estacionamiento", "en-bicicleta"],
    content: {
      kicker: "Cómo llegar",
      h1: "Desde la terminal de ómnibus",
      lead: "La Terminal de Ómnibus de Neuquén es un punto de arribo frecuente. Desde ahí, el paseo queda a una distancia que depende del acceso que elijas en la costanera.",
      linkLabel: "Desde la terminal",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "En colectivo urbano",
          paragraphs: [
            "Desde la terminal podés tomar transporte urbano hacia un acceso señalizado de la costanera. Líneas y frecuencias cambian, así que consultalas el día de la visita.",
          ],
          bullets: [
            "Colectivo: bajá en un acceso cercano al tramo que querés recorrer.",
            "Tiempos: variables según tránsito y recorrido.",
            "Acceso: elegí el más conveniente para tu plan.",
          ],
        },
        {
          heading: "En taxi o remis",
          paragraphs: [
            "Es la opción más directa si venís con equipaje o en grupo. Acordá la tarifa y el punto de bajada antes de subir.",
          ],
          callout:
            "No confirmamos horarios ni tarifas desde la terminal. Consultá las fuentes oficiales de transporte el mismo día.",
        },
        {
          heading: "En auto propio",
          paragraphs: [
            "Si alquilaste o venís en auto, dejalo en un acceso con estacionamiento y caminá desde ahí. Revisá la guía de estacionamiento.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Cómo llego de la terminal al paseo?",
          a: "En colectivo urbano o taxi; elegí el acceso más cercano a tu recorrido.",
        },
        {
          q: "¿Cuánto tarda?",
          a: "Depende del tránsito y del acceso; no asumás tiempos fijos.",
        },
        {
          q: "¿Conviene taxi?",
          a: "Sí si venís con equipaje o grupo; acordá tarifa antes de subir.",
        },
        {
          q: "¿Hay estacionamiento cerca?",
          a: "Sí, en los accesos urbanos; revisá la guía de estacionamiento.",
        },
        {
          q: "¿Se puede en bici desde la terminal?",
          a: "La distancia es considerable; evaluá tu condición y llevá agua.",
        },
      ],
    },
  },

  // 29. Desde Buenos Aires
  {
    slug: "desde-buenos-aires",
    group: "transporte",
    title: "Cómo llegar desde Buenos Aires a Paseo de la Costa (Neuquén)",
    description:
      "Cómo viajar desde Buenos Aires a Neuquén para visitar Paseo de la Costa: avión, colectivo de larga distancia y traslado urbano.",
    related: ["como-llegar", "desde-la-terminal", "desde-plottier", "estacionamiento", "desde-el-centro"],
    content: {
      kicker: "Cómo llegar",
      h1: "Desde Buenos Aires al paseo",
      lead: "Neuquén queda a gran distancia de Buenos Aires. Llegás en avión o en colectivo de larga distancia; desde la ciudad, el paseo es un tramo corto en auto o transporte urbano.",
      linkLabel: "Desde Buenos Aires",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "En avión",
          paragraphs: [
            "Hay vuelos que conectan Buenos Aires con Neuquén. Desde el aeropuerto, sumás un traslado en auto, remis o transporte hasta la costanera.",
          ],
          bullets: [
            "Aeropuerto: traslado en remis o auto al centro.",
            "Tiempo a la costanera: depende del acceso.",
            "Reservá con margen por clima y temporada.",
          ],
        },
        {
          heading: "En colectivo de larga distancia",
          paragraphs: [
            "El colectivo de larga distancia llega a la Terminal de Ómnibus de Neuquén. Desde ahí seguís en transporte urbano o taxi; revisá la guía desde la terminal.",
          ],
          callout:
            "No confirmamos frecuencias ni tarifas de Buenos Aires. Consultá las empresas de transporte y el clima de tu fecha.",
        },
        {
          heading: "En auto por ruta",
          paragraphs: [
            "El viaje por ruta es largo. Planificá paradas, combustible y descanso; al llegar a Neuquén, dejá el auto en un acceso con estacionamiento.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Cómo llego en avión?",
          a: "Volás a Neuquén y seguís en remis o auto hasta la costanera.",
        },
        {
          q: "¿Hay colectivo directo desde Buenos Aires?",
          a: "Sí, de larga distancia hasta la terminal de Neuquén; desde ahí, transporte urbano.",
        },
        {
          q: "¿Cuánto se tarda?",
          a: "Depende del medio y la temporada; no asumás un tiempo fijo.",
        },
        {
          q: "¿Conviene alquilar auto?",
          a: "Sí si querés moverte por la ciudad; estacionalo en un acceso con estacionamiento.",
        },
        {
          q: "¿Desde dónde sigo en Neuquén?",
          a: "Desde el aeropuerto o la terminal, en transporte urbano o remis.",
        },
      ],
    },
  },

  // 30. En taxi o remis
  {
    slug: "taxi-y-remis",
    group: "transporte",
    title: "Ir a Paseo de la Costa en taxi o remis",
    description:
      "Ventajas de usar taxi o remis para llegar a Paseo de la Costa en Neuquén: tarifa, puntos de bajada y consejos.",
    related: ["como-llegar", "desde-el-centro", "desde-la-terminal", "estacionamiento", "desde-buenos-aires"],
    content: {
      kicker: "Cómo llegar",
      h1: "En taxi o remis",
      lead: "El taxi y el remis son opciones directas desde el centro, la terminal o el aeropuerto. Confirmá tarifa y trayecto antes de subir.",
      linkLabel: "Taxi o remis",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Por qué elegirlos",
          paragraphs: [
            "Te dejan en el acceso que elijas y evitan preocuparte por estacionar, especialmente si venís con equipaje, niños o en grupo.",
          ],
          bullets: [
            "Puerta a puerta hasta el acceso.",
            "Útil con niños o movilidad reducida.",
            "Sin buscar estacionamiento.",
          ],
        },
        {
          heading: "Antes de subir",
          paragraphs: [
            "Acordá la tarifa o pedí que la habilite el taxímetro, y confirmá el punto de bajada cerca del tramo que querés recorrer.",
          ],
          callout:
            "No confirmamos tarifas; estas varían por empresa, horario y zona. Consultá antes de viajar.",
        },
        {
          heading: "De regreso",
          paragraphs: [
            "Para el regreso conviene coordinar el punto de encuentro o usar una app de viaje, sobre todo de noche. Revisá la guía de visita de noche.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Vale la pena el taxi?",
          a: "Sí si querés comodidad y dejarte en el acceso correcto.",
        },
        {
          q: "¿Cómo sé la tarifa?",
          a: "Acordala antes o pedí taxímetro; no confirmamos valores.",
        },
        {
          q: "¿De noche hay taxis?",
          a: "Sí, pero coordiná el punto de encuentro; revisá la guía nocturna.",
        },
        {
          q: "¿Me dejan en el paseo?",
          a: "Te dejan en el acceso que elijas de la costanera.",
        },
        {
          q: "¿Y desde el aeropuerto?",
          a: "Es la opción más directa; revisá la guía desde Buenos Aires.",
        },
      ],
    },
  },

  // 31. Cenar en la costanera
  {
    slug: "cenar-en-la-costanera",
    group: "comida",
    title: "Dónde cenar en la costanera de Paseo de la Costa",
    description:
      "Opciones para cenar en la ribera de Neuquén: ambientes, referencias como Cerveza Patagonia – Refugio Neuquén y transporte de regreso.",
    related: ["donde-comer", "restaurantes-isla-132", "cervecerias-y-bares", "heladerias", "de-noche"],
    content: {
      kicker: "Comer y beber en la ribera",
      h1: "Cenar en la costanera",
      lead: "Para cenar en la ribera conviene elegir un local con ambiente y prever el transporte de regreso. Referencias como Cerveza Patagonia – Refugio Neuquén suman opción con cerveza y vista.",
      linkLabel: "Cenar en la ribera",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Qué tipo de cena buscar",
          paragraphs: [
            "Si querés una cena con vista al río, apuntá a los locales del entorno de Isla 132. Si preferís algo más tranquilo, las cafeterías y heladerías también abren en horario vespertino.",
          ],
          bullets: [
            "Cerveza Patagonia – Refugio Neuquín: cervecería con ambiente.",
            "Restaurantes de Isla 132 para cena con vista.",
            "Heladerías y cafeterías para cerrar la noche.",
          ],
        },
        {
          heading: "Prever el regreso",
          paragraphs: [
            "De noche conviene definir cómo volvés: tu auto en el acceso, un taxi coordinado o transporte urbano. Revisá la guía de visita de noche.",
          ],
          callout:
            "No confirmamos horarios, carta ni precios de estos comercios. Verificá la información oficial de cada local antes de ir.",
        },
        {
          heading: "Después de cenar",
          paragraphs: [
            "Una vuelta corta a la orilla, respetando la señalización y la luz, cierra bien la noche. Revisá el recorrido de dos horas.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Dónde cenar con vista al río?",
          a: "En los locales del entorno de Isla 132; confirmá carta y horario con cada local.",
        },
        {
          q: "¿Hay cervecería?",
          a: "Cerveza Patagonia – Refugio Neuquén aparece como referencia de ambiente.",
        },
        {
          q: "¿Cómo vuelvo de noche?",
          a: "En tu auto, taxi coordinado o transporte urbano; revisá la guía nocturna.",
        },
        {
          q: "¿La guía recomienda uno?",
          a: "No. Mencionamos comercios de referencia; la decisión y los datos los confirmás con cada local.",
        },
        {
          q: "¿Abren las heladerías de noche?",
          a: "Algunas abren en horario vespertino; confirmalo en el lugar.",
        },
      ],
    },
  },

  // 32. Picnic en la costanera
  {
    slug: "picnic-en-la-costanera",
    group: "comida",
    title: "Picnic en Paseo de la Costa: dónde y cómo hacerlo",
    description:
      "Cómo hacer un picnic en la ribera de Neuquén: áreas habilitadas, qué llevar y cuidado del entorno.",
    related: ["donde-comer", "cafeterias-y-meriendas", "con-ninos", "seguridad-en-el-rio-limay", "recorridos/una-hora"],
    content: {
      kicker: "Comer y beber en la ribera",
      h1: "Picnic en la costanera",
      lead: "La ribera invita a un picnic al aire libre. Llevá tu comida, usá las áreas habilitadas y dejá el lugar igual que lo encontraste.",
      linkLabel: "Picnic en la ribera",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Dónde instalarte",
          paragraphs: [
            "Buscá las zonas de descanso y áreas verdes señalizadas del paseo. Evitá la orilla inestable del río y las zonas de tránsito de ciclistas.",
          ],
          bullets: [
            "Áreas de descanso señalizadas.",
            "Sombra en los tramos con arbolado.",
            "Lejos del borde del agua.",
          ],
        },
        {
          heading: "Qué llevar",
          paragraphs: [
            "Comida y bebida propias, bolsas para separar la basura, agua y, si venís con niños, juegos sencillos. Revisá la guía para ir con niños.",
          ],
          callout:
            "No confirmamos la disponibilidad de parrillas ni servicios de picnic. Verificá en el lugar qué está habilitado.",
        },
        {
          heading: "Cuidar el entorno",
          paragraphs: [
            "Retirá todos tus desechos y respetá la flora y la fauna del río. La ribera se cuida entre todas las personas que la visitan.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Se puede hacer picnic?",
          a: "Sí en las áreas señalizadas; no confirmamos parrillas ni servicios.",
        },
        {
          q: "¿Hay sombra?",
          a: "En los tramos con arbolado; buscá las áreas de descanso.",
        },
        {
          q: "¿Puedo llevar comida?",
          a: "Sí, es la opción más común; retirá tus desechos.",
        },
        {
          q: "¿Conviene con niños?",
          a: "Sí, en zonas de descanso; revisá la guía para ir con niños.",
        },
        {
          q: "¿Hay proveeduría cerca?",
          a: "Hay cafeterías y locales de comida; consultalos en el lugar.",
        },
      ],
    },
  },

  // 33. El paseo de noche
  {
    slug: "de-noche",
    group: "recorridos",
    title: "Visitar Paseo de la Costa de noche: luz y seguridad",
    description:
      "Cómo recorrer Paseo de la Costa de tarde a noche: iluminación, seguridad y qué evitar cerca del río.",
    related: ["recorridos/dos-horas", "recorridos/una-hora", "cenar-en-la-costanera", "seguridad-en-el-rio-limay", "cuando-ir"],
    content: {
      kicker: "Recorridos y rutas",
      h1: "El paseo de noche",
      lead: "Caminar de tarde a noche cambia la luz y el ambiente del río. Evaluá iluminación y seguridad, y no te acerques al borde del agua en oscuro.",
      linkLabel: "De noche",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Mejor horario",
          paragraphs: [
            "La hora dorada y el atardecer son los momentos más buscados. Quedate hasta que haya luz suficiente o andá por tramos bien iluminados.",
          ],
          bullets: [
            "Atardecer: la luz más suave para fotos.",
            "Noche: andá por zonas iluminadas.",
            "Evitá la orilla sin luz.",
          ],
        },
        {
          heading: "Seguridad cerca del agua",
          paragraphs: [
            "El borde del río puede ser inestable y no se ve de noche. Mantenete en los senderos señalizados y no te acerques a oscuras.",
          ],
          callout:
            "No asumás habilitación para baño ni actividades acuáticas. Seguí la señalización oficial en todo momento.",
        },
        {
          heading: "Cómo volver",
          paragraphs: [
            "De noche conviene tu auto en el acceso, un taxi coordinado o transporte urbano. Revisá la guía en taxi o remis.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Se puede caminar de noche?",
          a: "Sí por tramos iluminados; evitá la orilla sin luz.",
        },
        {
          q: "¿Es seguro el río de noche?",
          a: "El borde es inestable y no se ve; mantenete en los senderos.",
        },
        {
          q: "¿Cuál es la mejor hora para fotos?",
          a: "El atardecer, por la luz suave sobre el río.",
        },
        {
          q: "¿Cómo vuelvo?",
          a: "En auto, taxi coordinado o transporte urbano.",
        },
        {
          q: "¿Hay cena cerca?",
          a: "Sí, en la ribera; revisá la guía para cenar.",
        },
      ],
    },
  },

  // 34. Media jornada
  {
    slug: "recorridos/media-jornada",
    group: "recorridos",
    title: "Media jornada en Paseo de la Costa",
    description:
      "Cómo aprovechar media jornada en la ribera de Neuquén: ruta sugerida, miradores, pausa para comer y transporte.",
    related: ["recorridos/una-hora", "recorridos/dos-horas", "que-hacer", "isla-132", "cerca/miradores-rio-limay"],
    content: {
      kicker: "Recorridos y rutas",
      h1: "Media jornada en la ribera",
      lead: "Media jornada alcanza para combinar caminata, miradores y una pausa para comer o tomar algo. Planificá el acceso y el transporte de regreso.",
      linkLabel: "Media jornada",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Ruta sugerida",
          paragraphs: [
            "Empezá en un acceso señalizado, recorré un tramo de sendero, pará en un mirador del río y cerray con una pausa para comer o una heladería.",
          ],
          bullets: [
            "Acceso señalizado al inicio.",
            "Tramo de sendero a tu ritmo.",
            "Pausa para comer o tomar algo.",
          ],
        },
        {
          heading: "Dónde descansar",
          paragraphs: [
            "Las áreas de descanso y los miradores son los puntos para detenerse. Revisá la guía de miradores del río Limay.",
          ],
          callout:
            "No asumás actividades acuáticas ni habilitación de baño. Seguí la señalización oficial.",
        },
        {
          heading: "Cerrar la visita",
          paragraphs: [
            "Terminá cerca de tu acceso para volver en auto o coordinar el taxi. Revisá el recorrido de dos horas si querés más tramos.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Cuánto se tarda media jornada?",
          a: "Depende de tu ritmo; alcanza para caminar, mirar el río y comer.",
        },
        {
          q: "¿Vale la pena si tengo poco tiempo?",
          a: "Sí, podés hacer un recorrido de una hora más concentrado.",
        },
        {
          q: "¿Dónde comer en el medio?",
          a: "Cafeterías, heladerías o restaurantes de Isla 132; revisá dónde comer.",
        },
        {
          q: "¿Se puede con niños?",
          a: "Sí, en tramos planos; revisá la guía para ir con niños.",
        },
        {
          q: "¿Y si quiero más?",
          a: "Sumá el recorrido de dos horas con más miradores.",
        },
      ],
    },
  },

  // 35. Puesta de sol
  {
    slug: "recorridos/puesta-del-sol",
    group: "recorridos",
    title: "Puesta de sol en el río Limay: dónde mirarla",
    description:
      "Dónde ver la puesta de sol en Paseo de la Costa: miradores señalizados, horario y precauciones.",
    related: ["cerca/miradores-rio-limay", "de-noche", "recorridos/dos-horas", "seguridad-en-el-rio-limay", "recorridos/fotografia"],
    content: {
      kicker: "Recorridos y rutas",
      h1: "Puesta de sol en el río Limay",
      lead: "La puesta de sol sobre el río Limay es uno de los momentos más buscados. Llegá con tiempo a un mirador señalizado y no te acerques al borde.",
      linkLabel: "Puesta de sol",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Dónde mirarla",
          paragraphs: [
            "Los miradores señalizados a lo largo del paseo son los puntos para contemplar el atardecer sin arriesgarte en la orilla.",
          ],
          bullets: [
            "Miradores señalizados del paseo.",
            "Llegá con tiempo antes del atardecer.",
            "No te acerques al borde del agua.",
          ],
        },
        {
          heading: "Horario y estación",
          paragraphs: [
            "El horario cambia con la estación. En verano el atardecer es más tardío; en invierno, más temprano y con frío. Revisá la guía de cuándo ir.",
          ],
          callout:
            "No asumás condiciones de baño ni actividades acuáticas. La luz baja reduce la visibilidad del borde.",
        },
        {
          heading: "Para fotografiarla",
          paragraphs: [
            "Llevá el teléfono o cámara lista y usá los senderos para encuadrar el río. Revisá la guía de fotografía en la costanera.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Dónde ver la puesta de sol?",
          a: "En los miradores señalizados; no te acerques al borde.",
        },
        {
          q: "¿A qué hora es?",
          a: "Cambia con la estación; revisá la guía de cuándo ir.",
        },
        {
          q: "¿Se puede bajar al río?",
          a: "No asumás habilitación; seguí la señalización oficial.",
        },
        {
          q: "¿Conviene para fotos?",
          a: "Sí, por la luz suave; revisá la guía de fotografía.",
        },
        {
          q: "¿Y después del atardecer?",
          a: "Seguí por zonas iluminadas; revisá la guía nocturna.",
        },
      ],
    },
  },

  // 36. Fotografía
  {
    slug: "recorridos/fotografia",
    group: "recorridos",
    title: "Fotografía en Paseo de la Costa: consejos y puntos",
    description:
      "Cómo fotografiar Paseo de la Costa: mejor luz, miradores y precauciones en la ribera del río Limay.",
    related: ["cerca/miradores-rio-limay", "recorridos/puesta-del-sol", "recorridos/una-hora", "que-hacer", "naturaleza/aves-del-limay"],
    content: {
      kicker: "Recorridos y rutas",
      h1: "Fotografía en la costanera",
      lead: "La ribera ofrece paisajes del río, la luz de la mañana y la del atardecer. Respetá las áreas señalizadas y no trepes al borde inestable para la foto.",
      linkLabel: "Fotografía",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Mejor luz",
          paragraphs: [
            "La mañana y el atardecer dan la luz más suave sobre el río. En verano, evitá las horas centrales por el contraste y el calor.",
          ],
          bullets: [
            "Mañana y atardecer: luz suave.",
            "Atardecer: la hora más buscada.",
            "Horas centrales: luz dura y calor.",
          ],
        },
        {
          heading: "Puntos para fotografiar",
          paragraphs: [
            "Los miradores señalizados son los encuadres seguros del río y el puente. Revisá la guía de miradores del río Limay.",
          ],
          callout:
            "Por seguridad, no te acerques ni trepes al borde inestable del agua para la foto.",
        },
        {
          heading: "Aves y naturaleza",
          paragraphs: [
            "Si buscás fauna, mantenete quieto y a distancia. Revisá la guía de aves del río Limay sin pretender identificar especies con certeza.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Cuál es la mejor hora para fotos?",
          a: "Mañana y atardecer, por la luz suave.",
        },
        {
          q: "¿Dónde encuadrar el río?",
          a: "En los miradores señalizados; no te acerques al borde.",
        },
        {
          q: "¿Se puede fotografiar aves?",
          a: "Sí, a distancia y en silencio; no identificamos especies con certeza.",
        },
        {
          q: "¿Conviene un trípode?",
          a: "En el atardecer ayuda, pero usalo en zonas de descanso, no en el paso de ciclistas.",
        },
        {
          q: "¿Y de noche?",
          a: "Solo en zonas iluminadas; revisá la guía nocturna.",
        },
      ],
    },
  },

  // 37. Confluencia de los ríos
  {
    slug: "cerca/confluencia-de-los-rios",
    group: "cerca",
    title: "La confluencia de los ríos Neuquén y Limay",
    description:
      "Qué es la confluencia de los ríos Neuquén y Limay cerca de la ciudad: cómo combinarla con Paseo de la Costa.",
    related: ["mapa", "isla-132", "cerca/miradores-rio-limay", "historia/paseo-costero", "que-hacer"],
    content: {
      kicker: "Alrededores de la costanera",
      h1: "La confluencia de los ríos",
      lead: "Cerca de Neuquén, los ríos Neuquén y Limay se unen para formar el río Negro. Es un punto geográfico de interés que podés combinar con la visita a la costanera.",
      linkLabel: "Confluencia de los ríos",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Qué es",
          paragraphs: [
            "La confluencia es el punto donde el río Neuquén y el río Limay se encuentran y nace el río Negro. Es un hecho geográfico conocido de la región.",
          ],
          bullets: [
            "Río Neuquén + río Limay = río Negro.",
            "Punto geográfico cercano a la ciudad.",
            "Combinable con la costanera.",
          ],
        },
        {
          heading: "Cómo combinarla",
          paragraphs: [
            "Podés visitar la costanera del Limay y, en otro tramo o día, acercarte a ver la confluencia. No están a pocos pasos una de la otra: organizá el transporte.",
          ],
          callout:
            "No confirmamos miradores habilitados ni accesos exactos a la confluencia. Verificá las condiciones en el lugar.",
        },
      ],
      faq: [
        {
          q: "¿Qué ríos confluyen?",
          a: "El Neuquén y el Limay forman el río Negro.",
        },
        {
          q: "¿Está junto a la costanera?",
          a: "No a pocos pasos; es un punto aparte que conviene organizar por separado.",
        },
        {
          q: "¿Se puede visitar?",
          a: "Sí como punto geográfico; verificá accesos en el lugar.",
        },
        {
          q: "¿Conviene combinarla con el paseo?",
          a: "Sí, en tramos o días distintos, con transporte propio o urbano.",
        },
        {
          q: "¿Hay mirador?",
          a: "No confirmamos miradores habilitados; verificá en el lugar.",
        },
      ],
    },
  },

  // 38. Parque Central de Neuquén
  {
    slug: "cerca/parque-central-neuquen",
    group: "cerca",
    title: "Parque Central de Neuquén: cómo combinarlo con la costanera",
    description:
      "El Parque Central de Neuquén como espacio verde distinto de la costanera: diferencias, accesos y qué verificar.",
    related: ["mapa", "isla-132", "con-ninos", "cerca/sur-park", "que-hacer"],
    content: {
      kicker: "Alrededores de la costanera",
      h1: "Parque Central de Neuquén",
      lead: "El Parque Central es otro espacio verde de la ciudad, diferente de la costanera del río Limay. Organizalo como una parada aparte dentro de tu día.",
      linkLabel: "Parque Central",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "No es la costanera",
          paragraphs: [
            "Aunque ambos son espacios verdes de Neuquén, el Parque Central no está sobre el río Limay. Planificá el acceso como un destino distinto.",
          ],
          bullets: [
            "Parque Central: espacio verde urbano.",
            "Costanera: ribera del río Limay.",
            "Accesos y distancias distintos.",
          ],
        },
        {
          heading: "Cómo llegar",
          paragraphs: [
            "Llegá en auto, transporte urbano o a pie según tu base. No asumás que está a distancia caminable desde los accesos de la costanera.",
          ],
          callout:
            "No confirmamos horarios ni habilitaciones del Parque Central. Verificá las condiciones vigentes en el lugar.",
        },
      ],
      faq: [
        {
          q: "¿Es lo mismo que la costanera?",
          a: "No; el Parque Central es un espacio verde urbano, no la ribera del río.",
        },
        {
          q: "¿Cómo llego?",
          a: "En auto, transporte urbano o a pie; organizalo por separado.",
        },
        {
          q: "¿Conviene con niños?",
          a: "Sí como espacio verde; revisá la guía para ir con niños.",
        },
        {
          q: "¿Se puede combinar con el paseo?",
          a: "Sí como dos paradas de día, con transporte entre medias.",
        },
        {
          q: "¿Hay estacionamiento?",
          a: "No confirmamos capacidad ni tarifa; revisá en el lugar.",
        },
      ],
    },
  },

  // 39. Aves del río Limay
  {
    slug: "naturaleza/aves-del-limay",
    group: "naturaleza",
    title: "Aves del río Limay en Paseo de la Costa",
    description:
      "Observación de aves en la ribera del río Limay: qué se suele ver, dónde y precauciones sin pretender identificar especies.",
    related: ["seguridad-en-el-rio-limay", "naturaleza/flora-riberena", "naturaleza/sendero-rio-limay", "cerca/miradores-rio-limay", "mapa"],
    content: {
      kicker: "Naturaleza",
      h1: "Aves del río Limay",
      lead: "La ribera del Limay es observada por quienes buscan aves. No somos una fuente científica: compartimos lo que se suele ver, sin identificar especies con certeza absoluta.",
      linkLabel: "Aves del río",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Qué se suele ver",
          paragraphs: [
            "En la ribera aparecen aves asociadas al río y a la vegetación de la orilla. La diversidad cambia con la estación y el nivel del agua.",
          ],
          bullets: [
            "Aves ribereñas y de vegetación.",
            "Variación según estación y caudal.",
            "Observación sin perturbar.",
          ],
        },
        {
          heading: "Dónde observar",
          paragraphs: [
            "Los miradores y los senderos señalizados son los puntos para detenerse sin invadir la orilla. Revisá la guía de miradores del río Limay.",
          ],
          callout:
            "No identificamos especies con certeza ni somos una fuente ornitológica. Respetá la distancia y la fauna.",
        },
        {
          heading: "Cómo acercarse",
          paragraphs: [
            "Mantenete quieto y a distancia, usá binoculares si tenés y no alimentes a las aves. Revisá la guía de fotografía para no invadir el borde.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Hay aves en el río?",
          a: "Sí, asociadas a la ribera; no identificamos especies con certeza.",
        },
        {
          q: "¿Dónde observarlas?",
          a: "En miradores y senderos señalizados, sin ir a la orilla.",
        },
        {
          q: "¿Se pueden alimentar?",
          a: "No; respetá la fauna y la distancia.",
        },
        {
          q: "¿Qué temporada es mejor?",
          a: "Varía con el caudal y la estación; revisá cuándo ir.",
        },
        {
          q: "¿La guía nombra especies?",
          a: "No; compartimos lo que se suele ver sin certeza científica.",
        },
      ],
    },
  },

  // 40. Flora ribereña
  {
    slug: "naturaleza/flora-riberena",
    group: "naturaleza",
    title: "Flora ribereña del río Limay en Paseo de la Costa",
    description:
      "La vegetación de la ribera del Limay: qué tipo de flora se ve, cuidado del entorno y precauciones en el paseo.",
    related: ["naturaleza/aves-del-limay", "naturaleza/sendero-rio-limay", "seguridad-en-el-rio-limay", "recorridos/una-hora", "accesibilidad"],
    content: {
      kicker: "Naturaleza",
      h1: "Flora ribereña del Limay",
      lead: "La vegetación de la ribera acompaña el paseo. Es un entorno cambiante; no cortes ni alteres la flora y respetá las áreas protegidas.",
      linkLabel: "Flora ribereña",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Qué tipo de vegetación",
          paragraphs: [
            "La ribera del Limay tiene vegetación adaptada al río: arbustos, pastizales y árboles de zona húmeda, según el tramo y el nivel del agua.",
          ],
          bullets: [
            "Vegetación de ribera y zona húmeda.",
            "Cambios según tramo y caudal.",
            "Árboles, arbustos y pastizales.",
          ],
        },
        {
          heading: "Cuidar el entorno",
          paragraphs: [
            "No cortes ramas ni saques plantas. La ribera se mantiene entre todas las personas que la visitan y por la gestión de las áreas verdes.",
          ],
          callout:
            "No confirmamos especies ni estado de conservación. Respetá las áreas señalizadas y la flora.",
        },
        {
          heading: "Caminar entre la vegetación",
          paragraphs: [
            "Usá los senderos señalizados para no dañar la flora ni perderte cerca del borde inestable. Revisá la guía del sendero junto al río.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Qué plantas hay?",
          a: "Vegetación de ribera y zona húmeda; no confirmamos especies.",
        },
        {
          q: "¿Se puede cortar ramas?",
          a: "No; respetá la flora y las áreas señalizadas.",
        },
        {
          q: "¿La guía identifica especies?",
          a: "No; compartimos el entorno de forma general.",
        },
        {
          q: "¿Hay sombra?",
          a: "En los tramos con arbolado; buscá las áreas de descanso.",
        },
        {
          q: "¿Conviene con niños?",
          a: "Sí en senderos señalizados; revisá la guía para ir con niños.",
        },
      ],
    },
  },

  // 41. Sendero junto al río Limay
  {
    slug: "naturaleza/sendero-rio-limay",
    group: "naturaleza",
    title: "Sendero junto al río Limay en Paseo de la Costa",
    description:
      "Los senderos del paseo junto al río Limay: cómo recorrerlos, precauciones y qué llevar.",
    related: ["recorridos/una-hora", "recorridos/dos-horas", "naturaleza/flora-riberena", "naturaleza/aves-del-limay", "accesibilidad"],
    content: {
      kicker: "Naturaleza",
      h1: "Sendero junto al río Limay",
      lead: "Los senderos junto al río son el corazón del paseo. Caminá por lo señalizado, llevá agua y no te desvíes hacia la orilla inestable.",
      linkLabel: "Sendero del río",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Cómo recorrerlos",
          paragraphs: [
            "Los senderos señalizados conectan miradores y áreas de descanso. Andá a tu ritmo y usá las paradas para mirar el río.",
          ],
          bullets: [
            "Senderos señalizados del paseo.",
            "Miradores y áreas de descanso.",
            "Ritmo propio, sin prisa.",
          ],
        },
        {
          heading: "Precauciones",
          paragraphs: [
            "El borde del río puede ser inestable. Mantenete en el sendero y no te acerques a la orilla para la foto o el descanso.",
          ],
          callout:
            "No asumás habilitación para baño ni actividades acuáticas. Seguí la señalización oficial.",
        },
        {
          heading: "Qué llevar",
          paragraphs: [
            "Agua, protector solar y calzado cómodo. Si venís con perro, correa y bolsas; revisá la guía para visitar con perros.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Hay senderos señalizados?",
          a: "Sí, conectan miradores y áreas de descanso.",
        },
        {
          q: "¿Se puede bajar al río?",
          a: "No asumás habilitación; seguí la señalización oficial.",
        },
        {
          q: "¿Son accesibles?",
          a: "Varios tramos son pavimentados; confirmalo según el acceso.",
        },
        {
          q: "¿Cuánto se tarda?",
          a: "Depende del tramo; revisá los recorridos de una y dos horas.",
        },
        {
          q: "¿Qué llevar?",
          a: "Agua, solar y calzado cómodo; y correa si venís con perro.",
        },
      ],
    },
  },

  // 42. Visitar con perros
  {
    slug: "con-perros",
    group: "decision",
    title: "Visitar Paseo de la Costa con perros",
    description:
      "Cómo recorrer Paseo de la Costa con tu perro: correa, desechos, agua y áreas habilitadas en la ribera.",
    related: ["con-ninos", "accesibilidad", "servicios-y-banos", "seguridad-en-el-rio-limay", "recorridos/una-hora"],
    content: {
      kicker: "Para planificar la visita",
      h1: "Visitar con perros",
      lead: "Muchas personas recorren la costanera con su perro. Llevá correa, bolsas para retirar los desechos y agua; respetá las áreas habilitadas.",
      linkLabel: "Con perros",
      updated: "Octubre 2026",
      sections: [
        {
          heading: "Lo básico",
          paragraphs: [
            "Correa, bolsas para los desechos y agua son lo mínimo para recorrer con tu perro. Los senderos señalizados suelen ser los tramos más cómodos.",
          ],
          bullets: [
            "Correa durante el recorrido.",
            "Bolsas para retirar desechos.",
            "Agua para tu perro y para vos.",
          ],
        },
        {
          heading: "Dónde circular",
          paragraphs: [
            "Andá por los senderos y áreas de descanso habilitadas. Evitá la orilla inestable del río, donde tu perro tampoco debe acercarse.",
          ],
          callout:
            "No confirmamos zonas libres ni de baño para perros. Seguí la señalización oficial del espacio público.",
        },
        {
          heading: "Servicios",
          paragraphs: [
            "Revisá la guía de servicios y baños para ubicar dónde te puedes detener. En verano, cuidá las patas del calor en la hora central.",
          ],
        },
      ],
      faq: [
        {
          q: "¿Se puede ir con perro?",
          a: "Sí, con correa y bolsas; andá por los senderos señalizados.",
        },
        {
          q: "¿Hay que retirar los desechos?",
          a: "Sí, llevá bolsas y retiralos en todo momento.",
        },
        {
          q: "¿Puede acercarse al río?",
          a: "No asumás habilitación; mantenelo lejos del borde inestable.",
        },
        {
          q: "¿Hay agua para él?",
          a: "Llevá tu propia agua; no confirmamos bebederos.",
        },
        {
          q: "¿Conviene en verano?",
          a: "Sí, pero evitá la hora central y cuidá las patas del calor.",
        },
      ],
    },
  },
];

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

/** Returns a topic by its full slug, or undefined if not published. */
export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

/** All published topic slugs (used by the catch-all route). */
export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}

/** Topics grouped and ordered for the homepage cluster. */
export function topicsByGroup(): { group: TopicGroup; label: string; topics: Topic[] }[] {
  const order: TopicGroup[] = ["decision", "transporte", "comida", "cerca", "recorridos", "historia", "naturaleza"];
  return order
    .map((group) => ({
      group,
      label: GROUP_LABELS[group],
      topics: TOPICS.filter((t) => t.group === group),
    }))
    .filter((g) => g.topics.length > 0);
}

export { GROUP_LABELS as groupLabelRecord };
