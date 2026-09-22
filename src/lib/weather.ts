/**
 * Weather module for Paseo de la Costa.
 *
 * Data source: Open-Meteo (https://open-meteo.com) — free, no API key required.
 * Fetched server-side and cached; the rendered advice is derived entirely from
 * the forecast so visitors get actionable "what should I do" guidance instead of
 * raw meteorological numbers. Open-Meteo's free API does not include official
 * weather warnings, so the risk banner only appears for conditions we can infer.
 */

import type { Language } from "../components/SiteShell";

const TIMEZONE = "America/Argentina/Buenos_Aires";

export interface WeatherObservation {
  current: {
    temperature: number;
    code: number;
    humidity: number;
    apparent: number;
    windMs: number;
    gustMs: number;
    isDay: boolean;
    precip: number;
  };
  today: {
    code: number;
    tMax: number;
    tMin: number;
    precipProb: number;
    precipSum: number;
    uv: number;
    windMax: number;
    gustMax: number;
  };
  days: {
    date: string;
    code: number;
    tMax: number;
    tMin: number;
    precipProb: number;
  }[];
}

export interface RiskItem {
  danger: boolean;
  text: string;
}

export interface Advice {
  outfit: string[];
  activity: string[];
  gear: string[];
  risks: RiskItem[];
}

interface WmoInfo {
  label: string;
  emoji: string;
  cat: "clear" | "cloud" | "rain" | "snow" | "fog" | "thunder";
}

const WMO: Record<number, WmoInfo> = {
  0: { label: "Despejado", emoji: "☀️", cat: "clear" },
  1: { label: "Mayormente despejado", emoji: "🌤️", cat: "clear" },
  2: { label: "Parcialmente nublado", emoji: "⛅", cat: "cloud" },
  3: { label: "Nublado", emoji: "☁️", cat: "cloud" },
  45: { label: "Niebla", emoji: "🌫️", cat: "fog" },
  48: { label: "Niebla engelante", emoji: "🌫️", cat: "fog" },
  51: { label: "Llovizna leve", emoji: "🌦️", cat: "rain" },
  53: { label: "Llovizna", emoji: "🌦️", cat: "rain" },
  55: { label: "Llovizna densa", emoji: "🌧️", cat: "rain" },
  56: { label: "Llovizna helada", emoji: "🌧️", cat: "rain" },
  57: { label: "Llovizna helada", emoji: "🌧️", cat: "rain" },
  61: { label: "Lluvia leve", emoji: "🌦️", cat: "rain" },
  63: { label: "Lluvia", emoji: "🌧️", cat: "rain" },
  65: { label: "Lluvia intensa", emoji: "🌧️", cat: "rain" },
  66: { label: "Lluvia helada", emoji: "🌧️", cat: "rain" },
  67: { label: "Lluvia helada", emoji: "🌧️", cat: "rain" },
  71: { label: "Nieve leve", emoji: "🌨️", cat: "snow" },
  73: { label: "Nieve", emoji: "🌨️", cat: "snow" },
  75: { label: "Nieve intensa", emoji: "🌨️", cat: "snow" },
  77: { label: "Granos de nieve", emoji: "🌨️", cat: "snow" },
  80: { label: "Chubascos", emoji: "🌦️", cat: "rain" },
  81: { label: "Chubascos", emoji: "🌧️", cat: "rain" },
  82: { label: "Chubascos violentos", emoji: "🌧️", cat: "rain" },
  85: { label: "Chubascos de nieve", emoji: "🌨️", cat: "snow" },
  86: { label: "Chubascos de nieve", emoji: "🌨️", cat: "snow" },
  90: { label: "Tormenta", emoji: "⛈️", cat: "thunder" },
  91: { label: "Tormenta", emoji: "⛈️", cat: "thunder" },
  92: { label: "Tormenta", emoji: "⛈️", cat: "thunder" },
  93: { label: "Tormenta", emoji: "⛈️", cat: "thunder" },
  94: { label: "Tormenta", emoji: "⛈️", cat: "thunder" },
  95: { label: "Tormenta eléctrica", emoji: "⛈️", cat: "thunder" },
  96: { label: "Tormenta con granizo", emoji: "⛈️", cat: "thunder" },
  99: { label: "Tormenta con granizo", emoji: "⛈️", cat: "thunder" },
};

export function wmoInfo(code: number, lang: Language): WmoInfo {
  const info = WMO[code] ?? { label: lang === "es" ? "Tiempo variable" : "Changeable", emoji: "🌡️", cat: "cloud" };
  return info;
}

/** Convert wind speed (m/s) to the Beaufort scale (0–12). */
export function beaufort(ms: number): number {
  const v = Math.max(0, ms);
  if (v < 0.3) return 0;
  if (v < 1.6) return 1;
  if (v < 3.4) return 2;
  if (v < 5.5) return 3;
  if (v < 8.0) return 4;
  if (v < 10.8) return 5;
  if (v < 13.9) return 6;
  if (v < 17.2) return 7;
  if (v < 20.8) return 8;
  if (v < 24.5) return 9;
  if (v < 28.5) return 10;
  if (v < 32.7) return 11;
  return 12;
}

export function windWord(level: number, lang: Language): string {
  const ES = ["en calma", "muy suave", "suave", "leve", "moderado", "fresco", "fresco", "fuerte", "muy fuerte", "tempestuoso", "tempestuoso", "violento", "huracanado"];
  const EN = ["calm", "very light", "light", "gentle", "moderate", "fresh", "fresh", "strong", "near gale", "gale", "gale", "violent", "hurricane"];
  const arr = lang === "es" ? ES : EN;
  return arr[Math.min(level, arr.length - 1)];
}

function buildUrl(lat: number, lon: number): string {
  const p = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,cloud_cover,wind_speed_10m,wind_gusts_10m,wind_direction_10m",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_probability_max,precipitation_sum,wind_speed_10m_max,wind_gusts_10m_max,uv_index_max",
    timezone: TIMEZONE,
    forecast_days: "7",
    wind_speed_unit: "ms",
    temperature_unit: "celsius",
  });
  return `https://api.open-meteo.com/v1/forecast?${p.toString()}`;
}

/**
 * Fetch the current + 7-day forecast. Caches via the Cloudflare Cache API when
 * available (Workers runtime); otherwise falls back to a direct fetch. Returns
 * null on any failure so the UI can degrade gracefully.
 */
export async function fetchWeather(lat: number, lon: number): Promise<WeatherObservation | null> {
  const url = buildUrl(lat, lon);
  const g = globalThis as any;
  const cache = g.caches?.default as undefined | { match(k: any): Promise<any>; put(k: any, r: any): Promise<void> };
  try {
    if (cache) {
      const hit = await cache.match(new Request(url));
      if (hit) return normalize(await hit.json());
    }
    const init: any = { headers: { accept: "application/json" } };
    if (cache) init.cf = { cacheTtl: 600 };
    // Bound the upstream call so a slow/unreachable API degrades to the fallback
    // instead of stalling the request (Cloudflare Workers also enforce their own limit).
    init.signal = AbortSignal.timeout(8000);
    const res = await fetch(url, init);
    if (!res.ok) return null;
    const json = await res.json();
    const obs = normalize(json);
    if (cache && obs) {
      await cache.put(
        new Request(url),
        new Response(JSON.stringify(json), {
          headers: { "content-type": "application/json", "cache-control": "public, max-age=600" },
        })
      );
    }
    return obs;
  } catch {
    return null;
  }
}

function normalize(json: any): WeatherObservation | null {
  try {
    const c = json.current;
    const d = json.daily;
    return {
      current: {
        temperature: Math.round(c.temperature_2m),
        code: c.weather_code,
        humidity: c.relative_humidity_2m,
        apparent: Math.round(c.apparent_temperature),
        windMs: c.wind_speed_10m,
        gustMs: c.wind_gusts_10m,
        isDay: c.is_day === 1,
        precip: c.precipitation,
      },
      today: {
        code: d.weather_code[0],
        tMax: Math.round(d.temperature_2m_max[0]),
        tMin: Math.round(d.temperature_2m_min[0]),
        precipProb: d.precipitation_probability_max[0] ?? 0,
        precipSum: d.precipitation_sum[0] ?? 0,
        uv: d.uv_index_max[0] ?? 0,
        windMax: d.wind_speed_10m_max[0] ?? c.wind_speed_10m,
        gustMax: d.wind_gusts_10m_max[0] ?? c.wind_gusts_10m,
      },
      days: d.time.map((t: string, i: number) => ({
        date: t,
        code: d.weather_code[i],
        tMax: Math.round(d.temperature_2m_max[i]),
        tMin: Math.round(d.temperature_2m_min[i]),
        precipProb: d.precipitation_probability_max[i] ?? 0,
      })),
    };
  } catch {
    return null;
  }
}

const T = {
  es: {
    popHiOutfit: "Probabilidad de lluvia alta: llevá paraguas o poncho.",
    popHiActivity: "Si llueve, priorizá los tramos cubiertos; las caminatas junto al río convienen posponerse.",
    popHiGear: "Paraguas o impermeable.",
    lightRainActivity: "Lluvia leve: el piso puede estar resbaladizo, caminá con cuidado.",
    lightRainGear: "Paraguas plegable.",
    heavyRainRisk: "Lluvia intensa: evitá arroyos y la orilla baja del río; las salidas en bote pueden suspenderse.",
    heavyRainActivity: "No es el mejor momento para estar al aire libre; preferí espacios cubiertos.",
    heavyRainGear: "Poncho; evitá el paraguas de palo si hay viento.",
    thunderRisk: "Tormenta eléctrica: no te refugies bajo árboles ni te acerques al agua; las actividades acuáticas suelen suspenderse.",
    thunderActivity: "Las propuestas sobre el río probablemente estén cerradas.",
    heatOutfit: "Hace calor: evitá las horas centrales y usá ropa liviana.",
    heatActivity: "Acortá el tiempo al aire libre al mediodía.",
    heatGear: "Protector solar, gafas y agua.",
    uvOutfit: "Radiación solar fuerte: cuidate del sol.",
    uvGear: "Protector solar, gafas de sol y gorra.",
    diffOutfit: "Gran contraste entre el día y la noche: llevá una chaqueta para abrigarte.",
    coldOutfit: "Temperatura baja: abrigate bien.",
    coldGear: "Abrigo grueso y bufanda.",
    windOutfit: "Viento moderado a fuerte.",
    windActivity: "Las salidas en bote y algunas actividades al aire libre pueden suspenderse; tu gorra puede volar.",
    windGear: "Evitá polleras anchas y sueltas.",
    windRisk: "Viento fuerte: alejate de carteles y de las rocas a la orilla del río.",
    clearOutfit: "Buen clima para estar afuera.",
    clearActivity: "Ideal para caminar y para ver amaneceres y atardeceres.",
    clearGear: "No olvides el protector solar.",
    cloudOutfit: "Luz suave, muy buena para fotografiar.",
    cloudActivity: "Sin sol fuerte, cómodo para recorrer mucho rato al aire libre.",
    fogRisk: "Niebla: poca visibilidad; no es el mejor momento para ver el paisaje lejano.",
    fogGear: "Barbijo si molesta.",
  },
  en: {
    popHiOutfit: "High chance of rain: bring an umbrella or raincoat.",
    popHiActivity: "If it rains, stick to covered stretches; walks along the river are better postponed.",
    popHiGear: "Umbrella or raincoat.",
    lightRainActivity: "Light rain: paths can be slippery, walk with care.",
    lightRainGear: "Folding umbrella.",
    heavyRainRisk: "Heavy rain: avoid streams and the low riverbank; boat trips may be suspended.",
    heavyRainActivity: "Not the best time to be outdoors; prefer covered spaces.",
    heavyRainGear: "Raincoat; skip the long umbrella if it's windy.",
    thunderRisk: "Thunderstorm: don't shelter under trees or go near the water; water activities are usually suspended.",
    thunderActivity: "River-based activities are likely closed.",
    heatOutfit: "It's hot: avoid the midday hours and wear light clothing.",
    heatActivity: "Shorten time outdoors around noon.",
    heatGear: "Sunscreen, sunglasses and water.",
    uvOutfit: "Strong sun: protect yourself.",
    uvGear: "Sunscreen, sunglasses and a cap.",
    diffOutfit: "Big day-to-night swing: bring a jacket so you can add or remove layers.",
    coldOutfit: "Low temperature: dress warmly.",
    coldGear: "Thick coat and scarf.",
    windOutfit: "Moderate to fresh wind.",
    windActivity: "Boat trips and some outdoor activities may be suspended; your cap can blow away.",
    windGear: "Avoid loose, flowing dresses.",
    windRisk: "Strong wind: keep away from signs and from rocks at the river's edge.",
    clearOutfit: "Good weather to be outside.",
    clearActivity: "Great for walking and for sunrise or sunset views.",
    clearGear: "Don't forget sunscreen.",
    cloudOutfit: "Soft light, excellent for photography.",
    cloudActivity: "No harsh sun, comfortable for a long outdoor stroll.",
    fogRisk: "Fog: poor visibility; not the best time for distant views.",
    fogGear: "A mask if it bothers you.",
  },
} as const;

function uniq(arr: string[]): string[] {
  return [...new Set(arr)];
}

/** Build visitor-facing advice from the observation. Empty arrays hide their panel. */
export function buildAdvice(obs: WeatherObservation, lang: Language): Advice {
  const t = T[lang];
  const outfit: string[] = [];
  const activity: string[] = [];
  const gear: string[] = [];
  const risks: RiskItem[] = [];

  const curCat = wmoInfo(obs.current.code, lang).cat;
  const dayCat = wmoInfo(obs.today.code, lang).cat;
  const cat = dayCat; // base the day's plan on today's dominant code
  const wind = beaufort(obs.current.windMs);
  const gust = beaufort(obs.today.gustMax);
  const strongWind = Math.max(wind, gust) >= 7;
  const freshWind = Math.max(wind, gust) >= 5;

  // Rain probability (independent of code)
  if (obs.today.precipProb >= 60) {
    outfit.push(t.popHiOutfit);
    activity.push(t.popHiActivity);
    gear.push(t.popHiGear);
  }

  // Precipitation / storms
  if (cat === "thunder") {
    risks.push({ danger: true, text: t.thunderRisk });
    activity.push(t.thunderActivity);
  } else if (cat === "rain") {
    const heavy = obs.today.code === 65 || obs.today.code === 82 || obs.today.precipSum >= 15;
    if (heavy) {
      risks.push({ danger: true, text: t.heavyRainRisk });
      activity.push(t.heavyRainActivity);
      gear.push(t.heavyRainGear);
    } else {
      activity.push(t.lightRainActivity);
      gear.push(t.lightRainGear);
    }
  } else if (cat === "snow") {
    activity.push(lang === "es" ? "Posible nieve: el piso puede estar resbaladizo." : "Possible snow: paths may be slippery.");
    gear.push(lang === "es" ? "Calzado con buen agarre." : "Grippy footwear.");
  }

  // Heat
  if (obs.today.tMax >= 32) {
    outfit.push(t.heatOutfit);
    activity.push(t.heatActivity);
    gear.push(t.heatGear);
  }
  // UV
  if (obs.today.uv >= 5) {
    outfit.push(t.uvOutfit);
    gear.push(t.uvGear);
  }

  // Cold
  if (obs.today.tMax - obs.today.tMin > 8) {
    outfit.push(t.diffOutfit);
  }
  if (obs.today.tMax <= 10) {
    outfit.push(t.coldOutfit);
    gear.push(t.coldGear);
  }

  // Wind
  if (strongWind) {
    risks.push({ danger: true, text: t.windRisk });
  } else if (freshWind) {
    outfit.push(t.windOutfit);
    activity.push(t.windActivity);
    gear.push(t.windGear);
  }

  // Clear / cloudy baseline (only when no heavier condition dominated)
  if (cat === "clear") {
    outfit.push(t.clearOutfit);
    activity.push(t.clearActivity);
    gear.push(t.clearGear);
  } else if (cat === "cloud" || cat === "fog") {
    outfit.push(t.cloudOutfit);
    activity.push(t.cloudActivity);
  }

  // Fog
  if (cat === "fog") {
    risks.push({ danger: false, text: t.fogRisk });
    gear.push(t.fogGear);
  }

  // Fallback so a panel is never empty when there is data
  if (outfit.length === 0) outfit.push(t.cloudOutfit);
  if (activity.length === 0) activity.push(t.cloudActivity);

  return {
    outfit: uniq(outfit),
    activity: uniq(activity),
    gear: uniq(gear),
    risks,
  };
}
