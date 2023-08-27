import * as server from '../entries/pages/dashboard/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.f5701441.js","_app/immutable/chunks/index.00c81b53.js","_app/immutable/chunks/alert.b823b687.js"];
export const stylesheets = ["_app/immutable/assets/5.c673e9f2.css","_app/immutable/assets/style.0dbdd93b.css","_app/immutable/assets/alert.9869db3d.css"];
export const fonts = [];
