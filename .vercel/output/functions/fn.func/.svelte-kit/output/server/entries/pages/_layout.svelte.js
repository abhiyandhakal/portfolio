import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { N as Nav, F as Footer } from "../../chunks/nav.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".slot.svelte-iz42mz{min-height:50vh}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</header>

${slots.default ? slots.default({ class: "slot svelte-iz42mz" }) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
