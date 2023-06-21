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

interface Social {
	id: number;
	href: string;
	text: string;
	icon: Icon;
}

interface NavItem extends Social {
	target?: string;
}

export { Icon, Social, NavItem };
