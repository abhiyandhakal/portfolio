import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.adc52cfc.js","_app/immutable/chunks/index.00c81b53.js","_app/immutable/chunks/nav.fd2b6070.js","_app/immutable/chunks/v4.b745f2a9.js"];
export const stylesheets = ["_app/immutable/assets/0.d1f44a33.css","_app/immutable/assets/nav.d305d442.css","_app/immutable/assets/style.0dbdd93b.css"];
export const fonts = [];
