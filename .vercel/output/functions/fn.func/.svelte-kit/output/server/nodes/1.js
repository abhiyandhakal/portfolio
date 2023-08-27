

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fc067b86.js","_app/immutable/chunks/index.00c81b53.js","_app/immutable/chunks/singletons.5fcb7b0f.js"];
export const stylesheets = [];
export const fonts = [];
