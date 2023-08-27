import { c as create_ssr_component, d as each, f as add_attribute, e as escape, h as null_to_empty } from "./index2.js";
/* empty css       */import "iconify-icon";
import { v4 } from "uuid";
const navItems = [
  { id: 0, href: "/", text: "Home", icon: { icon: "bxs:home" } },
  {
    id: 1,
    href: "/about",
    text: "About Me",
    icon: { icon: "mdi:about", color: "skyblue" }
  },
  {
    id: 2,
    href: "/projects",
    text: "Projects",
    icon: { icon: "fluent:folder-48-filled", color: "skyblue" }
  },
  {
    id: 3,
    href: "https://github.com/abhiyandhakal/portfolio",
    text: "Contribute",
    target: "_blank",
    icon: {
      icon: "mdi:github",
      color: "var(--text-primary)"
    }
  }
];
const social = [
  {
    id: v4(),
    text: "Github",
    href: "https://github.com/abhiyandhakal",
    icon: {
      icon: "mdi:github",
      color: "var(--text-primary)"
    }
  },
  {
    id: v4(),
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/abhiyan-dhakal-9b0b01223/?originalSubdomain=np",
    icon: {
      icon: "devicon:linkedin"
    }
  },
  {
    id: v4(),
    text: "Twitter",
    href: "https://twitter.com/itsabhiyan",
    icon: {
      icon: "logos:twitter"
    }
  },
  {
    id: v4(),
    text: "Mail",
    href: "mailto:itsabhiyandhakal@gmail.com",
    icon: {
      icon: "material-symbols:mail",
      color: "var(--text-primary)"
    }
  }
];
const footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'hr.svelte-122gwk4.svelte-122gwk4.svelte-122gwk4{width:100%;border:none;border-radius:100%;display:block;height:2px;background:var(--bg-primary)}@media(min-width: 60rem){hr.svelte-122gwk4.svelte-122gwk4.svelte-122gwk4{display:none}}h2.svelte-122gwk4.svelte-122gwk4.svelte-122gwk4{color:var(--text-secondary);font-size:var(--fz-2xl);font-weight:700;margin-bottom:var(--gap-small)}footer.svelte-122gwk4.svelte-122gwk4.svelte-122gwk4{display:grid;place-items:center;background:var(--bg-header-footer);box-shadow:var(--shadow-1);padding:calc(var(--gap-1) / 2) var(--gap-1)}footer.svelte-122gwk4>div.svelte-122gwk4.svelte-122gwk4{display:grid;grid-template-columns:repeat(3, 1fr);max-width:var(--max-width)}@media(max-width: 60rem){footer.svelte-122gwk4>div.svelte-122gwk4.svelte-122gwk4{grid-template-columns:1fr;gap:var(--gap-lg);justify-items:center}}footer.svelte-122gwk4>div.svelte-122gwk4>.svelte-122gwk4{position:relative}footer.svelte-122gwk4>div.svelte-122gwk4>.svelte-122gwk4::after{content:"";position:absolute;height:100%;width:2px;background:var(--bg-primary);border-radius:100%;right:0}@media(max-width: 60rem){footer.svelte-122gwk4>div.svelte-122gwk4>.svelte-122gwk4::after{height:2px;width:100%;bottom:0;content:unset}}footer.svelte-122gwk4>div.svelte-122gwk4>.svelte-122gwk4:first-child::before{content:"";position:absolute;height:100%;width:2px;background:var(--bg-primary);border-radius:100%;left:0}@media(max-width: 60rem){footer.svelte-122gwk4>div.svelte-122gwk4>.svelte-122gwk4:first-child::before{height:2px;width:100%;bottom:0;content:unset}}footer.svelte-122gwk4>div.svelte-122gwk4>.svelte-122gwk4:last-child{grid-template-columns:repeat(3, 1fr);grid-column:1/-1}footer.svelte-122gwk4>div.svelte-122gwk4>.svelte-122gwk4:last-child::after{content:unset}ul.svelte-122gwk4.svelte-122gwk4.svelte-122gwk4{list-style:none;padding:0;margin:0}.social-media.svelte-122gwk4.svelte-122gwk4.svelte-122gwk4{display:grid;gap:calc(var(--gap-small) * 3);align-content:start;justify-items:center}.social-media.svelte-122gwk4 ul.svelte-122gwk4.svelte-122gwk4{display:flex;justify-content:center;width:fit-content;font-size:var(--fz-2xl)}.social-media.svelte-122gwk4 ul.svelte-122gwk4 a.svelte-122gwk4{padding:var(--gap-small);display:block;transition:var(--transition-1)}.social-media.svelte-122gwk4 ul.svelte-122gwk4 a.svelte-122gwk4:hover{background:var(--bg-secondary);border-radius:var(--radius-1)}.navigation.svelte-122gwk4.svelte-122gwk4.svelte-122gwk4{display:grid;justify-items:center}.navigation.svelte-122gwk4 ul.svelte-122gwk4.svelte-122gwk4{width:fit-content;display:grid;gap:calc(var(--gap-small) / 2)}@media(max-width: 60rem){.navigation.svelte-122gwk4 ul.svelte-122gwk4.svelte-122gwk4{display:flex;flex-wrap:wrap;justify-content:center}}.navigation.svelte-122gwk4 .nav-item .link-container.svelte-122gwk4.svelte-122gwk4{display:flex;align-items:center;gap:0.3rem;width:fit-content}.navigation.svelte-122gwk4 .nav-item .link-container a.svelte-122gwk4.svelte-122gwk4{color:var(--text-primary);text-decoration:none;font-size:var(--fz-lg);font-weight:700}.navigation.svelte-122gwk4 .nav-item .link-container a.svelte-122gwk4.svelte-122gwk4:hover{color:var(--text-secondary)}.contact-form.svelte-122gwk4.svelte-122gwk4.svelte-122gwk4{display:grid;width:fit-content;grid-template-columns:0.5fr 1.5fr;align-items:center;gap:var(--gap-small);padding-inline:var(--gap-lg)}.contact-form.svelte-122gwk4>.svelte-122gwk4.svelte-122gwk4:first-child{grid-column:1/-1}.contact-form.svelte-122gwk4 h2.svelte-122gwk4.svelte-122gwk4{justify-self:center}.contact-form.svelte-122gwk4 .btn.svelte-122gwk4.svelte-122gwk4{width:fit-content;grid-column:2/-1}iconify-icon.svelte-122gwk4.svelte-122gwk4.svelte-122gwk4{font-size:1.2em}.copyright.svelte-122gwk4.svelte-122gwk4.svelte-122gwk4{font-size:var(--fz-xl);color:var(--text-secondary);padding-block:var(--gap-small)}.copyright.svelte-122gwk4 p.svelte-122gwk4.svelte-122gwk4{text-align:center;padding-block-start:var(--gap-small)}.copyright.svelte-122gwk4 p span.svelte-122gwk4.svelte-122gwk4{color:var(--text-primary);font-weight:700}.copyright.svelte-122gwk4.svelte-122gwk4.svelte-122gwk4::before{content:"";width:100%;height:2px;border-radius:100%;background:var(--bg-primary);display:block;margin:var(--gap-small)}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-122gwk4"><div class="svelte-122gwk4"><section class="navigation svelte-122gwk4"><h2 class="svelte-122gwk4">Navigation</h2>
			<ul class="svelte-122gwk4">${each(navItems, ({ id, href, text, icon }) => {
    return `<li class="nav-item"><span class="link-container svelte-122gwk4"><iconify-icon${add_attribute("style", icon.color ? `color: ${icon.color};` : "", 0)}${add_attribute("icon", icon.icon, 0)} class="svelte-122gwk4"></iconify-icon>
							<a class="hover-animate svelte-122gwk4"${add_attribute("href", href, 0)}>${escape(text)}
							</a></span>
					</li>`;
  })}</ul></section>

		<hr class="svelte-122gwk4">

		<section class="social-media svelte-122gwk4"><h2 class="svelte-122gwk4">Social Media</h2>
			<ul class="svelte-122gwk4">${each(social, ({ id, href, icon }) => {
    return `<li><a${add_attribute("href", href, 0)} target="_blank" class="svelte-122gwk4"><iconify-icon${add_attribute("icon", icon.icon, 0)}${add_attribute("style", icon.color ? `color: ${icon.color};` : "", 0)} class="svelte-122gwk4"></iconify-icon></a>
					</li>`;
  })}</ul></section>

		<hr class="svelte-122gwk4">

		<form class="contact-form svelte-122gwk4" action="/?contact"><h2 class="svelte-122gwk4">Contact Me</h2>

			<label for="name" class="svelte-122gwk4">Name</label>
			<input type="name" class="textbox svelte-122gwk4" placeholder="Your Name" id="name" required>

			<label for="email" class="svelte-122gwk4">Email</label>
			<input type="email" class="textbox svelte-122gwk4" placeholder="your@example.com" id="email" required>

			<label for="content" class="svelte-122gwk4">Content</label>
			<textarea class="textbox svelte-122gwk4" name="content" id="content" placeholder="Write your body here" required></textarea>

			<button class="btn svelte-122gwk4" type="submit">Send</button></form>

		<section class="copyright svelte-122gwk4"><p class="svelte-122gwk4">Copyright (c) 2023 <span class="svelte-122gwk4">Abhiyan Dhakal</span>. All rights reserved.</p></section></div>
</footer>`;
});
const nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-toi70a.svelte-toi70a{position:relative;background:var(--bg-header-footer);height:var(--nav-height);display:grid;place-items:center;backdrop-filter:blur(10px);box-shadow:var(--shadow-1)}nav.svelte-toi70a>div.svelte-toi70a{width:100%;max-width:var(--max-width);height:100%;display:flex;align-items:center;justify-content:space-between;padding-inline:var(--gap-1)}nav.svelte-toi70a>div ul.svelte-toi70a{display:flex;align-items:center;list-style:none;gap:calc(var(--gap-1, 1rem) * 1.5)}nav.svelte-toi70a .hamburger-container.svelte-toi70a{display:none}@media(max-width: 50rem){nav.show-nav.svelte-toi70a.svelte-toi70a{box-shadow:unset}nav.svelte-toi70a .hamburger-container.svelte-toi70a{display:block}nav.svelte-toi70a ul.svelte-toi70a{position:absolute;top:100%;background:var(--bg-header-footer);margin:0;left:0;width:100%;flex-direction:column;backdrop-filter:blur(10px);scale:1 0;transition:var(--transition-2);transform-origin:top;padding-block:var(--gap-1);align-items:unset !important}nav.svelte-toi70a ul.show.svelte-toi70a{scale:1 1}}.link-container.svelte-toi70a.svelte-toi70a{display:flex;align-items:center;gap:0.3em}.link-container.svelte-toi70a iconify-icon.svelte-toi70a{font-size:1.2em}a.svelte-toi70a.svelte-toi70a{color:var(--text-primary);text-decoration:none;font-weight:700}a.active.svelte-toi70a.svelte-toi70a,a.svelte-toi70a.svelte-toi70a:active{color:var(--text-secondary)}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active = 0;
  if (typeof window !== "undefined") {
    active = navItems.find(({ href }) => href === window.location.pathname)?.id ?? 0;
  }
  $$result.css.add(css);
  return `<nav class="${escape(null_to_empty(""), true) + " svelte-toi70a"}"><a href="#content" class="skip-to-content svelte-toi70a">Skip To Content</a>
	<div class="svelte-toi70a">
		<span class="logo" style="font-size: 1.6rem"><a href="/" class="svelte-toi70a">AbhiyanDhakal</a></span>

		
		<button class="hamburger-container svelte-toi70a"><span class="sr-only">Navigation Menu</span>
			<span class="${escape(null_to_empty(`hamburger ${""}`), true) + " svelte-toi70a"}" aria-label="Navigation Menu"></span></button>

		
		<ul class="${escape(null_to_empty(""), true) + " svelte-toi70a"}" role="navigation">${each(navItems, ({ id, href, text, target, icon }) => {
    return `<li class="nav-item"><span class="link-container svelte-toi70a"><iconify-icon${add_attribute("style", icon.color ? `color: ${icon.color};` : "", 0)}${add_attribute("icon", icon.icon, 0)} class="svelte-toi70a"></iconify-icon>
						<a class="${escape(null_to_empty(`hover-animate ${id === active ? "active" : null}`), true) + " svelte-toi70a"}"${add_attribute("href", href, 0)}${add_attribute("target", target, 0)}>${escape(text)}
						</a></span>
				</li>`;
  })}</ul></div>
</nav>`;
});
export {
  Footer as F,
  Nav as N
};
