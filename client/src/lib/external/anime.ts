// Wrapper for anime.js to handle TypeScript import issues

// @ts-ignore
import * as animeJs from "animejs";

// The actual anime function (this should work because it accesses the default export)
const anime = (animeJs as any).default || animeJs;

export default anime;

// Helper types
export type AnimeInstance = any;
export type AnimeParams = any;
export type AnimeTimelineInstance = any;