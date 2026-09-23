// Shared helpers for the Open-Meteo powered weather module.
// The frontend never names the data provider; it only shows weather & advice.

export function wmoToEmoji(code: number): string {
  if (code === 0) return '☀️';
  if (code === 1) return '🌤️';
  if (code === 2) return '⛅';
  if (code === 3) return '☁️';
  if (code === 45 || code === 48) return '🌫️';
  if (code >= 51 && code <= 57) return '🌦️';
  if (code >= 61 && code <= 67) return '🌧️';
  if (code >= 80 && code <= 82) return '🌦️';
  if (code >= 71 && code <= 77) return '🌨️';
  if (code >= 85 && code <= 86) return '🌨️';
  if (code >= 95) return '⛈️';
  return '🌡️';
}

export function wmoToKey(code: number): string {
  if (code === 0) return 'clear';
  if (code === 1 || code === 2) return 'partly';
  if (code === 3) return 'cloudy';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 57) return 'drizzle';
  if (code >= 61 && code <= 67) return 'rain';
  if (code >= 80 && code <= 82) return 'rain';
  if (code >= 71 && code <= 77) return 'snow';
  if (code >= 85 && code <= 86) return 'snow';
  if (code >= 95) return 'thunder';
  return 'clear';
}

export function kmhToBeaufort(kmh: number): number {
  const steps = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103];
  let level = 0;
  for (let i = 0; i < steps.length; i++) {
    if (kmh >= steps[i]) level = i + 1;
  }
  return level;
}

export function uvCategory(uv: number): string {
  if (uv < 3) return 'low';
  if (uv < 6) return 'moderate';
  if (uv < 8) return 'high';
  if (uv < 11) return 'veryhigh';
  return 'extreme';
}

// A condition key the advice engine can emit. The localized copy for each key
// lives in the i18n `weather.advice` map as { outfit?, plan?, items?, risk? }.
export type AdviceKey =
  | 'thunder'
  | 'heavyRain'
  | 'lightRain'
  | 'rain60'
  | 'hot'
  | 'uv'
  | 'coldDiff'
  | 'cold'
  | 'wind56'
  | 'wind7'
  | 'fog'
  | 'clear'
  | 'cloudy';

export interface AdviceInput {
  code: number; // today's WMO weather code
  tempMax: number;
  tempMin: number;
  windMaxKmh: number; // daily max wind
  uv: number; // daily max UV index
  precipProb: number; // daily max precipitation probability
}

type Group = 'thunder' | 'heavyRain' | 'lightRain' | 'fog' | 'clear' | 'cloudy' | 'snow' | 'other';

function wmoGroup(code: number): Group {
  if (code >= 95) return 'thunder';
  if (code === 65 || code === 66 || code === 67 || code === 82) return 'heavyRain';
  if (code === 45 || code === 48) return 'fog';
  if (code === 0 || code === 1) return 'clear';
  if (code === 3 || code === 2) return 'cloudy';
  if ((code >= 51 && code <= 57) || (code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return 'lightRain';
  if (code >= 71 && code <= 77) return 'snow';
  return 'other';
}

// Returns the triggered condition keys (severe/safety first). The UI maps each
// key to localized outfit / plan / items / risk copy and shows only what applies.
export function buildAdvice(w: AdviceInput): AdviceKey[] {
  const keys: AdviceKey[] = [];
  const g = wmoGroup(w.code);

  if (g === 'thunder') keys.push('thunder');
  if (g === 'heavyRain') keys.push('heavyRain');
  if (g === 'fog') keys.push('fog');

  const bf = kmhToBeaufort(w.windMaxKmh);
  if (bf >= 7 && g !== 'thunder') keys.push('wind7');
  else if (bf >= 5) keys.push('wind56');

  if (g !== 'thunder' && g !== 'heavyRain' && g !== 'lightRain' && w.precipProb >= 60) keys.push('rain60');
  if (g === 'lightRain') keys.push('lightRain');

  if (w.tempMax >= 32) keys.push('hot');
  if (w.uv >= 5) keys.push('uv');
  if (w.tempMax - w.tempMin > 8) keys.push('coldDiff');
  if (w.tempMax <= 10) keys.push('cold');

  if (g === 'clear') keys.push('clear');
  else if (g === 'cloudy') keys.push('cloudy');

  return keys;
}
