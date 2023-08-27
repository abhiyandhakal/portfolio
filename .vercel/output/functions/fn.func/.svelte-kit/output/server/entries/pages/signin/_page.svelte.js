import { c as create_ssr_component, f as add_attribute, v as validate_component, e as escape } from "../../../chunks/index2.js";
/* empty css                     */import { N as Nav, F as Footer } from "../../../chunks/nav.js";
/* empty css                                                   */const css$1 = {
  code: ".alert.svelte-1dwu2q{position:fixed;bottom:var(--gap-lg);left:var(--gap-lg);color:var(--text-dark);padding:var(--gap-small) var(--gap-lg);border-radius:var(--radius-1);z-index:1000}",
  map: null
};
function getColor(type2) {
  let color;
  switch (type2) {
    case "error":
      color = "var(--color-red, red)";
      break;
    case "success":
      color = "var(--color-green, green)";
      break;
    case "warning":
      color = "var(--color-yellow, yellow)";
      break;
    default:
      color = "var(--bg-primary, blue)";
  }
  return color;
}
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$1);
  return `<span class="alert svelte-1dwu2q"${add_attribute("style", `background: ${getColor(type)}`, 0)}>${slots.default ? slots.default({}) : ``}
</span>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1kk0w1r.svelte-1kk0w1r{min-height:50vh;padding:var(--gap-1)}h1.svelte-1kk0w1r.svelte-1kk0w1r{margin-top:var(--gap-1)}form.svelte-1kk0w1r.svelte-1kk0w1r{max-width:500px;margin-inline:auto;font-size:var(--fz-2xl);display:grid;gap:var(--gap-lg)}form.svelte-1kk0w1r .form-group.svelte-1kk0w1r{display:grid;grid-template-columns:auto 1fr;gap:var(--gap-lg);position:relative}form.svelte-1kk0w1r .form-group .show-hide.svelte-1kk0w1r{position:absolute;right:0;background:none;border:none;display:grid;place-items:center;height:100%;padding-inline:var(--gap-small);cursor:pointer}form.svelte-1kk0w1r .form-group .show-hide.svelte-1kk0w1r:hover{background:var(--bg-secondary)}form.svelte-1kk0w1r input.svelte-1kk0w1r{padding:var(--gap-small) var(--gap-lg)}form.svelte-1kk0w1r .btn.svelte-1kk0w1r{max-width:fit-content;margin-inline:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let isSignedIn = false;
  if (form?.message) {
    isSignedIn = true;
  }
  setTimeout(
    () => {
      if (form?.error) {
        form.error = "";
      } else if (form?.message) {
        form.message = "";
      }
    },
    5e3
  );
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<header>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
	<h1 class="h1 svelte-1kk0w1r">Sign In</h1></header>

<main class="container svelte-1kk0w1r" id="content">${form?.error ? `${validate_component(Alert, "Alert").$$render($$result, { type: "error" }, {}, {
    default: () => {
      return `${escape(form.error)}`;
    }
  })}` : `${form?.message ? `${validate_component(Alert, "Alert").$$render($$result, { type: "success" }, {}, {
    default: () => {
      return `${escape(form.message)}`;
    }
  })}` : ``}`}

	${isSignedIn ? `<p style="font-size: var(--fz-2xl);">Go to <a class="link" href="/dashboard">Dashboard</a></p>` : ``}

	<form method="POST" class="svelte-1kk0w1r"><div class="form-group svelte-1kk0w1r"><label for="username">Username</label>
			<input type="text" class="textbox svelte-1kk0w1r" name="username" value="admin" id="username" required></div>

		<div class="form-group svelte-1kk0w1r"><label for="password">Password</label>
			<input${add_attribute("type", "password", 0)} class="textbox svelte-1kk0w1r" name="password" id="password" required>
			<button class="show-hide svelte-1kk0w1r" type="button"><iconify-icon${add_attribute("icon", "formkit:hidden", 0)} style="color: var(--text-primary)"></iconify-icon></button></div>

		<button class="btn svelte-1kk0w1r" type="submit">Sign In</button></form></main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
