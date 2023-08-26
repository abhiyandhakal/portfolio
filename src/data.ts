import { v4 } from "uuid";
import type { NavItem, Social } from "./app.d";

const navItems: NavItem[] = [
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

const social: Social[] = [
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

export { navItems, social };
