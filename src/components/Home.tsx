/**
 * Design reminder — Cartografía de ribera: real photo reportage leads;
 * geographic lines, asymmetry, and the Azul Limay signature guide every section.
 */
import { Accessibility, BusFront, CarFront, ChevronDown, CircleParking, Compass, ExternalLink, Footprints, Fuel, MapPinned, Plane, ShieldAlert, Soup, SunMedium, Ticket, Trees, UsersRound, Waves, Wind } from "lucide-react";
import { ConfluenceMark, SiteFooter, SiteHeader, type Language } from "./SiteShell";

const siteCopy = {
  es: {
    skip: "Saltar al contenido",
    heroEyebrow: "Neuquén · Río Limay · Argentina",
    heroTitle: "Donde la ciudad aprende a caminar con el río.",
    heroText: "Una guía independiente para descubrir Paseo de la Costa: una ribera pública de baja dificultad donde el paisaje, el movimiento y la pausa se encuentran.",
    explore: "Empezá el recorrido",
    seeMap: "Ver ubicación",
    photoCaption: "Ribera del río Limay · Paseo Costero",
    facts: [["14 km", "de ribera pública"], ["Baja", "dificultad de senderos"], ["Exterior", "espacio de acceso público"]],
    atlas: "Cuaderno de ribera",
    introTitle: "Un paseo que sigue el curso del Limay.",
    intro: "Paseo de la Costa recorre la ribera del río Limay y enlaza distintos tramos de la ciudad de Neuquén. La información pública municipal describe 14 kilómetros de costa, con senderos delimitados, bicisendas, iluminación, miradores, estaciones saludables y zonas para descansar. El trazado tiene baja dificultad y está pensado para la convivencia de peatones y ciclistas.",
    citation: "Ver fuente municipal",
    riverNote: "El agua es paisaje y también condición cambiante: antes de acercarte a la orilla, observá señalización, clima y estado del sector.",
    noteBy: "Nota de cuidado",
    planEyebrow: "Orientación práctica",
    planTitle: "Planificá una visita a tu ritmo.",
    planText: "No hay una única experiencia de paseo: elegí un tramo, dejá margen para detenerte y verificá en el día los servicios puntuales que necesitás.",
    bestTitle: "Mejor momento y tiempo sugerido",
    bestText: "Las primeras horas y el final de la tarde suelen ofrecer luz más suave para caminar y observar el río. Para una primera aproximación, reservá entre 60 y 120 minutos; un recorrido en bicicleta o con pausas puede extenderse. En verano, la exposición al sol y las condiciones del río requieren atención extra.",
    costTitle: "Entrada y costos",
    costText: "El paseo se presenta como espacio público al aire libre y no se informa una entrada general. Las actividades, servicios temporales o eventos pueden tener condiciones propias: consultá su organización antes de participar.",
    amenitiesTitle: "Servicios que conviene ubicar",
    amenityItems: [
      ["Sanitarios", "Hay baños públicos informados en un tramo del Paseo Costero Río Limay cercano al Club Unipol. Su disponibilidad y horario pueden variar."],
      ["Estacionamiento", "Encontrarás sectores de estacionamiento y zonas de parada en distintos accesos. Respetá la señalización y no bloquees circulaciones peatonales ni ciclovías."],
      ["Comida y descanso", "Cerca de los accesos urbanos pueden encontrarse opciones de gastronomía y puntos para comprar agua o provisiones. Esta guía no recomienda comercios específicos."],
      ["Alojamiento y compras", "La oferta urbana de Neuquén concentra alojamientos, supermercados, farmacias y otros servicios. Confirmá horarios y accesibilidad con cada establecimiento."],
      ["Combustible y carga", "Para viajes en vehículo, organizá combustible o carga eléctrica antes de llegar; estos servicios no forman parte necesariamente del paseo."],
      ["Accesibilidad", "El paseo cuenta con senderos de baja dificultad; aun así, las pendientes, superficies y servicios varían por tramo. Planificá según tus necesidades."],
    ],
    mobilityEyebrow: "Cómo llegar",
    mobilityTitle: "Llegar a la ribera, desde lejos o desde la ciudad.",
    mobilityText: "La referencia del mapa se ubica en el área de Paseo de la Costa junto a los ríos Limay y Neuquén. Elegí tu acceso según el tramo que quieras recorrer.",
    transport: [
      ["Desde el aeropuerto", "El Aeropuerto Internacional Presidente Perón conecta Neuquén con vuelos nacionales. Desde allí, continuá hacia la ciudad en taxi, remis, vehículo de alquiler o servicio disponible en el día; comprobá el punto de descenso según el acceso elegido."],
      ["Desde la terminal", "La Estación Terminal de Ómnibus de Neuquén recibe servicios de larga distancia. Desde la terminal, verificá las conexiones urbanas vigentes o utilizá taxi/remis para dirigirte al tramo del paseo que te interese."],
      ["En transporte urbano", "Las líneas y recorridos se actualizan con el tiempo. Consultá el planificador o los avisos oficiales del transporte local el mismo día, y descendé en un acceso seguro y señalizado."],
      ["En auto o bicicleta", "Usá el mapa como punto de orientación, pero seguí la señalización vial y ciclista real. En horas de mayor concurrencia, manejá despacio y compartí el espacio con peatones."],
    ],
    routeCta: "Abrir en Google Maps",
    mapEyebrow: "Punto de partida",
    mapTitle: "Ubicá tu acceso antes de salir.",
    mapText: "El Paseo de la Costa es extenso: el mapa señala una referencia sobre la costa. Revisá el entorno y las indicaciones del lugar antes de comenzar.",
    nearbyEyebrow: "Hitos de la confluencia",
    nearbyTitle: "Sumá paisaje, no una lista de pendientes.",
    nearbyText: "Estos puntos ayudan a leer el entorno de los ríos y la ciudad. Las distancias reales dependen del tramo desde el que inicies el paseo.",
    nearby: [
      ["Isla 132", "Área ribereña dentro del sistema de paseo, vinculada con actividades al aire libre y vistas del entorno fluvial."],
      ["Miradores de la costa", "Pequeños puntos de observación y descanso que aparecen a lo largo del recorrido. Elegí uno según la luz y el tiempo disponible."],
      ["Confluencia de los ríos", "El paisaje de la unión de los ríos Limay y Neuquén permite comprender la geografía que estructura la ciudad."],
    ],
    historyEyebrow: "Leer el paisaje",
    historyTitle: "Dos ríos, una ciudad que mira hacia su borde.",
    history: "Paseo de la Costa propone acercarse a un territorio donde agua, arbolado y ciudad se superponen. Más que una visita cerrada, es una secuencia de tramos: el río Limay, la cercanía del Neuquén y la confluencia forman una referencia geográfica central. Recorrer con calma permite reconocer por qué la ribera es a la vez espacio recreativo, corredor de movilidad y paisaje compartido.",
    storyQuote: "“La ribera se entiende mejor cuando se la recorre sin apuro: siguiendo la luz, el viento y el ritmo del agua.”",
    careTitle: "Antes de ir",
    care: ["Llevá agua, protección solar y una capa extra si cambia el viento.", "Mantenete en senderos y sectores habilitados; no ingreses al agua si las condiciones no son seguras.", "Guardá tus residuos y respetá a quienes caminan, corren o circulan en bicicleta.", "Para cambios de ruta, clima o servicios, priorizá la señalización y los canales oficiales."],
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Lo esencial, antes de emprender el paseo.",
    faq: [
      ["¿Se paga entrada?", "No se informa una entrada general para el paseo como espacio público. Eventos y actividades específicas pueden tener sus propias condiciones."],
      ["¿Cuánto tiempo necesito?", "Para una primera visita, entre una y dos horas permite caminar un tramo con pausas. La duración cambia según el acceso y el medio de movilidad."],
      ["¿Puedo ir en bicicleta?", "Sí. La información municipal señala bicisendas y pide convivencia entre ciclistas y peatones. Moderá la velocidad en áreas concurridas."],
      ["¿Hay baños?", "Existe un módulo de baños públicos informado para un tramo del Paseo Costero Río Limay cercano a Club Unipol. Consultá en el día la disponibilidad y el horario."],
      ["¿Es buena idea entrar al río?", "El río requiere precaución. No des por sentadas las condiciones de baño; observá señalización, condiciones climáticas y pautas oficiales antes de acercarte al agua."],
      ["¿Hay comida o estacionamiento?", "Hay servicios urbanos en las cercanías y zonas de estacionamiento en distintos accesos, pero la oferta y la capacidad pueden variar. Esta guía no recomienda negocios concretos."],
    ],
    sourceLabel: "Fuentes y alcance",
    sourceText: "Esta guía usa como referencia principal la información turística y de prensa publicada por la Municipalidad de Neuquén. Para cualquier decisión de viaje, contrastá horarios, accesos y condiciones con información oficial actualizada.",
    discover: "Descubrí la guía",
    routeLegend: "Carta de recorrido · tramos 01—04",
    routeCondition: "Luz, servicios y condiciones del río: verificá en sitio.",
  },
  en: {
    skip: "Skip to content",
    heroEyebrow: "Neuquén · Limay River · Argentina",
    heroTitle: "Where the city learns to walk with the river.",
    heroText: "An independent guide to Paseo de la Costa: a low-difficulty public riverfront where landscape, movement and pause meet.",
    explore: "Start the walk",
    seeMap: "View location",
    photoCaption: "Limay River bank · Paseo Costero",
    facts: [["14 km", "of public riverbank"], ["Low", "trail difficulty"], ["Open-air", "public-access space"]],
    atlas: "River notebook",
    introTitle: "A promenade that follows the Limay's course.",
    intro: "Paseo de la Costa runs along the Limay River and connects different stretches of Neuquén. Municipal public information describes 14 kilometres of riverbank, with marked trails, cycle paths, lighting, viewpoints, fitness stations and rest areas. The route is low difficulty and is intended for shared use by walkers and cyclists.",
    citation: "View municipal source",
    riverNote: "Water is both landscape and a changing condition: before approaching the bank, check local signage, weather and the state of the area.",
    noteBy: "Care note",
    planEyebrow: "Practical orientation",
    planTitle: "Plan a visit at your own pace.",
    planText: "There is no single version of the walk: choose a section, allow time to pause and check the availability of any specific services you need on the day.",
    bestTitle: "Best time and suggested duration",
    bestText: "Early hours and late afternoon often provide softer light for walking and looking out across the river. Allow 60 to 120 minutes for a first visit; a cycling route or one with pauses may take longer. In summer, sun exposure and river conditions deserve added attention.",
    costTitle: "Admission and costs",
    costText: "The promenade is presented as an outdoor public space, with no general entry fee indicated. Activities, temporary services or events may have their own conditions—check with their organisers before taking part.",
    amenitiesTitle: "Services worth locating",
    amenityItems: [
      ["Restrooms", "Public restrooms have been reported for a section of Paseo Costero Río Limay near Club Unipol. Availability and hours may change."],
      ["Parking", "Parking areas and stopping zones can be found at different access points. Follow signage and do not block pedestrian paths or cycle lanes."],
      ["Food and rest", "Urban access points may have food options and places to buy water or supplies. This guide does not endorse individual businesses."],
      ["Stays and essentials", "Neuquén's urban area has accommodation, supermarkets, pharmacies and other services. Confirm opening times and access conditions with each provider."],
      ["Fuel and charging", "If travelling by vehicle, plan fuel or electric charging before you arrive; these services are not necessarily part of the promenade."],
      ["Accessibility", "The route includes low-difficulty paths, but gradients, surfaces and facilities differ by section. Plan around your own needs."],
    ],
    mobilityEyebrow: "Getting there",
    mobilityTitle: "Reach the riverbank, from afar or across the city.",
    mobilityText: "The map reference sits in the Paseo de la Costa area beside the Limay and Neuquén rivers. Choose your approach according to the section you wish to walk.",
    transport: [
      ["From the airport", "Presidente Perón International Airport connects Neuquén with domestic flights. Continue into the city by taxi, remise, rental vehicle or a service available that day; check your drop-off point for the chosen access."],
      ["From the bus terminal", "Neuquén Bus Terminal receives long-distance services. From the terminal, check current urban connections or use a taxi/remise to reach the promenade section you want."],
      ["By public transport", "Lines and routes change over time. Consult the local trip planner or operator notices on the same day, then alight at a safe, signed access point."],
      ["By car or bicycle", "Use the map as a guide, but follow actual road and cycle signage. When the area is busy, drive slowly and share space with walkers."],
    ],
    routeCta: "Open in Google Maps",
    mapEyebrow: "Starting point",
    mapTitle: "Locate your access before you leave.",
    mapText: "Paseo de la Costa is extensive: the map marks one reference point on the riverbank. Review the surroundings and on-site directions before you start.",
    nearbyEyebrow: "Confluence landmarks",
    nearbyTitle: "Add landscape, not another checklist.",
    nearbyText: "These points help you read the setting of river and city. Actual distance depends on the section where you begin the walk.",
    nearby: [
      ["Isla 132", "A riverbank area within the promenade system, connected with outdoor activities and views across the river setting."],
      ["Riverside viewpoints", "Small observation and rest points appear along the route. Choose one based on light and the time you have."],
      ["The river confluence", "The landscape where the Limay and Neuquén rivers meet helps explain the geography that structures the city."],
    ],
    historyEyebrow: "Reading the landscape",
    historyTitle: "Two rivers, and a city looking toward its edge.",
    history: "Paseo de la Costa brings visitors close to a place where water, tree cover and city overlap. Rather than a fixed visit, it is a sequence of sections: the Limay River, the nearby Neuquén River and their confluence form a key geographic reference. Walking slowly reveals why the riverbank is at once a recreational space, mobility corridor and shared landscape.",
    storyQuote: "“The riverbank is best understood unhurriedly: by following the light, the wind and the pace of the water.”",
    careTitle: "Before you go",
    care: ["Bring water, sun protection and an extra layer in case the wind changes.", "Stay on established paths and authorised areas; do not enter the water when conditions are unsafe.", "Take your waste with you and respect people walking, running or cycling.", "For route, weather or service changes, prioritise local signage and official channels."],
    faqEyebrow: "Frequently asked questions",
    faqTitle: "The essentials, before you set off.",
    faq: [
      ["Is there an admission fee?", "No general entry fee is reported for the promenade as a public space. Individual events and activities may have their own conditions."],
      ["How long should I allow?", "For a first visit, one to two hours lets you walk a section and pause. Timing changes with access point and mode of travel."],
      ["Can I bring a bicycle?", "Yes. Municipal information notes cycle paths and asks cyclists and walkers to share the space. Reduce speed in busy areas."],
      ["Are there restrooms?", "A public restroom module is reported near Club Unipol for one section of Paseo Costero Río Limay. Confirm availability and hours on the day."],
      ["Is it a good idea to enter the river?", "The river calls for care. Do not assume swimming conditions; check signs, weather and official guidance before approaching the water."],
      ["Are there food options or parking?", "There are urban services nearby and parking areas at different access points, but offer and capacity can change. This guide does not recommend specific businesses."],
    ],
    sourceLabel: "Sources and scope",
    sourceText: "This guide primarily uses public tourism and press information published by the Municipality of Neuquén. For travel decisions, cross-check current opening, access and condition details with official information.",
    discover: "Discover the guide",
    routeLegend: "Route chart · sections 01—04",
    routeCondition: "Light, facilities and river conditions: check on site.",
  },
} as const;

const amenityIcons = [Accessibility, CircleParking, Soup, UsersRound, Fuel, Footprints];
const transportIcons = [Plane, BusFront, BusFront, CarFront];

export default function Home({ initialLanguage = "es" }: { initialLanguage?: Language }) {
  const language = initialLanguage;
  const c = siteCopy[language];

  return <div className="site-frame" lang={language}>
    <div className="river-spine" aria-hidden="true"><span /><ConfluenceMark /><span /></div>
    <a className="skip-link" href="#contenido">{c.skip}</a>
    <SiteHeader language={language} />
    <main id="contenido">
      <section className="hero" id="inicio">
        <div className="hero-graphics" aria-hidden="true"><img src="/manus-storage/paseo-limay-hero-contours_39566ba8.jpg" alt="" /><span className="hero-river-line one" /><span className="hero-river-line two" /></div>
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />{c.heroEyebrow}</p>
          <h1>{c.heroTitle}</h1>
          <p className="lede">{c.heroText}</p>
          <div className="hero-actions"><a className="button-solid" href="#visita"><Compass size={17} />{c.explore}</a><a className="button-quiet" href="#ubicacion">{c.seeMap}<span>↘</span></a></div>
        </div>
        <figure className="hero-photo"><img src="/manus-storage/limay-river-autumn_a52f30d2.jpg" alt={language === "es" ? "Ribera arbolada del río Limay en Neuquén" : "Tree-lined bank of the Limay River in Neuquén"} /><figcaption><span>{c.photoCaption}</span><span>01</span></figcaption></figure>
        <div className="hero-facts">{c.facts.map(([big, small]) => <div key={big}><strong>{big}</strong><span>{small}</span></div>)}</div>
      </section>

      <section className="intro-section section-flow" aria-labelledby="atlas-heading">
        <div className="section-marker"><span>01</span><i>{c.atlas}</i></div>
        <div className="intro-copy"><h2 id="atlas-heading">{c.introTitle}</h2><p>{c.intro}</p><a className="source-link" href="https://www.neuquencapital.gov.ar/turismo/paseo-costero-4/" target="_blank" rel="noreferrer">{c.citation}<ExternalLink size={14} /></a></div>
        <div className="river-note"><Waves aria-hidden="true" size={28} /><p>{c.riverNote}</p><small>{c.noteBy}</small></div>
        <figure className="river-photo"><img src="/manus-storage/paseo-limay-vertical_f64ac97c.jpg" alt={language === "es" ? "Acceso documentado al Paseo de la Costa" : "Documentary view of a Paseo de la Costa access"} /></figure>
      </section>

      <section className="practical-section" id="visita" aria-labelledby="visit-heading">
        <div className="section-heading split-heading"><div><p className="eyebrow">{c.planEyebrow}</p><h2 id="visit-heading">{c.planTitle}</h2></div><p>{c.planText}</p></div>
        <aside className="route-legend" aria-label={c.routeLegend}><ConfluenceMark /><div><strong>{c.routeLegend}</strong><span>{c.routeCondition}</span></div><i>38° 58′ S · 68° 03′ O</i></aside>
        <div className="practical-ribbon"><img src="/manus-storage/paseo-limay-route-ribbon_eafe1f9b.jpg" alt="" /><div className="timing-card"><SunMedium size={23} /><div><h3>{c.bestTitle}</h3><p>{c.bestText}</p></div></div><div className="cost-card"><Ticket size={21} /><div><h3>{c.costTitle}</h3><p>{c.costText}</p></div></div></div>
        <div className="amenities-area"><div className="amenities-intro"><p className="eyebrow">{c.atlas}</p><h3>{c.amenitiesTitle}</h3><img src="/manus-storage/paseo-limay-amenities-map_900f3006.jpg" alt="" /></div><div className="amenity-list">{c.amenityItems.map(([title, text], index) => { const Icon = amenityIcons[index]; return <article key={title}><span><Icon size={19} /></span><div><h4>{title}</h4><p>{text}</p></div></article>; })}</div></div>
      </section>

      <section className="mobility-section section-flow" aria-labelledby="mobility-heading">
        <div className="section-marker"><span>02</span><i>{c.mobilityEyebrow}</i></div>
        <div className="mobility-lead"><p className="eyebrow">{c.mobilityEyebrow}</p><h2 id="mobility-heading">{c.mobilityTitle}</h2><p>{c.mobilityText}</p></div>
        <div className="transport-list">{c.transport.map(([title, text], index) => { const Icon = transportIcons[index]; return <article key={title}><span>0{index + 1}</span><Icon size={21} /><div><h3>{title}</h3><p>{text}</p></div></article>; })}</div>
      </section>

      <section className="map-section" id="ubicacion" aria-labelledby="map-heading">
        <div className="map-copy"><p className="eyebrow">{c.mapEyebrow}</p><h2 id="map-heading">{c.mapTitle}</h2><p>{c.mapText}</p><a className="button-solid" href="https://www.google.com/maps/search/?api=1&query=Paseo%20de%20la%20Costa%2C%20Neuqu%C3%A9n%2C%20Argentina" target="_blank" rel="noreferrer"><MapPinned size={17} />{c.routeCta}</a><p className="map-coords">38° 58′ 45″ S · 68° 03′ 22″ O</p></div>
        <div className="map-frame"><iframe title="Paseo de la Costa en Neuquén" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5516.618733068807!2d-68.05618952252352!3d-38.97917527170686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a32203113e6c7%3A0x1ec9e5b4b83d4aa7!2sPaseo%20de%20la%20Costa!5e1!3m2!1ses-419!2sar!4v1787793759333!5m2!1ses-419!2sar" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
      </section>

      <section className="nearby-section" aria-labelledby="nearby-heading">
        <div className="section-heading split-heading"><div><p className="eyebrow">{c.nearbyEyebrow}</p><h2 id="nearby-heading">{c.nearbyTitle}</h2></div><p>{c.nearbyText}</p></div>
        <div className="nearby-stops">{c.nearby.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div><Compass size={19} /></article>)}</div>
      </section>

      <section className="story-section" aria-labelledby="story-heading">
        <figure><img src="/manus-storage/limay-path-sunset_aebb7ad5.jpg" alt={language === "es" ? "Atardecer en la costa del río Limay" : "Sunset on the Limay River bank"} /><figcaption>{c.photoCaption}</figcaption></figure>
        <div className="story-copy"><p className="eyebrow">{c.historyEyebrow}</p><h2 id="story-heading">{c.historyTitle}</h2><p>{c.history}</p><blockquote>{c.storyQuote}</blockquote></div>
        <div className="care-card"><Wind size={24} /><h3>{c.careTitle}</h3><ul>{c.care.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section className="faq-section" id="preguntas" aria-labelledby="faq-heading">
        <div className="faq-intro"><p className="eyebrow">{c.faqEyebrow}</p><h2 id="faq-heading">{c.faqTitle}</h2><div className="faq-stamp"><Trees size={21} /><span>Paseo de la Costa<br />Neuquén</span></div></div>
        <div className="faq-list">{c.faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{question}</strong><ChevronDown size={20} /></summary><div className="faq-answer"><p>{answer}</p></div></details>)}</div>
      </section>

      <section className="sources-section"><div><ShieldAlert size={23} /><p className="eyebrow">{c.sourceLabel}</p><p>{c.sourceText}</p></div><div className="source-links"><a href="https://www.neuquencapital.gov.ar/turismo/paseo-costero-4/" target="_blank" rel="noreferrer">Municipalidad de Neuquén · Turismo <ExternalLink size={14} /></a><a href="https://www.neuquencapital.gov.ar/prensa/la-municipalidad-incorporo-banos-publicos-al-paseo-costero-rio-limay-en-el-sector-del-barrio-confluencia/" target="_blank" rel="noreferrer">Municipalidad de Neuquén · Prensa <ExternalLink size={14} /></a></div></section>
    </main>
    <SiteFooter language={language} />
  </div>;
}
