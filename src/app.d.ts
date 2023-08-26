// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

interface Icon {
	icon: string;
	color?: string;
}

interface TechIcon {
	id: number | string;
	name: string;
	href: string;
	icon: Icon;
}

interface Social extends TechIcon {
	text: string;
}

interface NavItem extends Social {
	target?: "_self" | "_blank" | "_parent" | "_top";
}

export { Icon, Social, NavItem, TechIcon };
