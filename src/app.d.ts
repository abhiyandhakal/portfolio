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

interface TechIconWithoutName {
	id: number | string;
	href: string;
	icon: Icon;
}

interface Social extends TechIconWithoutName {
	text: string;
}

interface NavItem extends Social {
	target?: "_self" | "_blank" | "_parent" | "_top";
}

interface TechIcon extends TechIconWithoutName {
	name: string;
}

type Project = {
	id: string;
	title: string;
	thumbnail: string;
	link: string;
	description: string;
	relatedContentLink?: string;
};

export { Icon, Social, NavItem, TechIcon, Project };
