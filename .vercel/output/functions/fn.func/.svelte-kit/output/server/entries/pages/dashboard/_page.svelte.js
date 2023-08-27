import { c as create_ssr_component, d as each, e as escape, v as validate_component, m as missing_component } from "../../../chunks/index2.js";
/* empty css                     *//* empty css                                                   */const addProject_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "form.svelte-14o83rb.svelte-14o83rb{display:grid;max-width:500px;margin:var(--gap-lg);margin-inline:auto;background:var(--bg-secondary);padding:var(--gap-lg);border-radius:var(--radius-xl);gap:var(--gap-lg)}form.svelte-14o83rb div.svelte-14o83rb{display:grid;grid-template-columns:auto 1fr;gap:var(--gap-lg)}textarea.svelte-14o83rb.svelte-14o83rb{resize:vertical}",
  map: null
};
const Add_project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<form class="svelte-14o83rb"><input class="textbox" required type="text" name="name" placeholder="Project name">
	<textarea class="textbox svelte-14o83rb" required name="description" placeholder="Project description"></textarea>
	<div class="svelte-14o83rb"><select name="platform" class="textbox"><option value="github">Github</option><option value="gitlab">Gitlab</option></select>
		<input class="textbox" required type="text" name="repo" placeholder="Project Repository"></div>
	<input type="text" name="related-article" class="textbox" placeholder="Related Article Link">
	<input class="textbox" required type="file" name="thumbnail" placeholder="Project image" accept="image/*">
	<button class="btn">Add project</button></form>

${``}`;
});
const search_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".search.svelte-pikhou{display:flex;flex:1}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `
<form class="search svelte-pikhou"><input type="text" class="textbox" name="search" placeholder="Search projects">
	<button class="btn">Search</button>
</form>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-enua8h{min-height:50vh;margin-inline:auto;max-width:var(--max-width);padding-inline:var(--gap-lg)}p.svelte-enua8h{text-align:center;padding:var(--gap-lg);font-size:var(--fz-2xl)}.logout.svelte-enua8h{position:absolute;top:calc(var(--nav-height) + var(--gap-lg));right:var(--gap-lg)}.tabs-container.svelte-enua8h{display:flex;justify-content:center;gap:var(--gap-small);flex-wrap:wrap}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let currentTab = "add-project";
  const tabs = [
    {
      name: "add-project",
      label: "Add project",
      item: Add_project
    },
    {
      name: "search",
      label: "Search projects",
      item: Search
    }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<header><h1 class="h1">Dashboard</h1></header>

<main class="svelte-enua8h">${data?.authenticated ? `<form action="?/logout" method="post"><button class="btn logout svelte-enua8h">Log Out</button></form>

		<div class="tabs-container svelte-enua8h">${each(tabs, (tab) => {
    return `<button class="btn">${escape(tab.label)}</button>`;
  })}</div>

		${each(tabs, (tab) => {
    return `${currentTab === tab.name ? `${validate_component(tab.item || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``}`;
  })}` : `<h2 class="h2">You are not authenticated</h2>

		<p class="svelte-enua8h">Please <a class="link" href="/signin">sign in</a> to access the dashboard.
		</p>`}
</main>`;
});
export {
  Page as default
};
