import { v4 } from "uuid";
import type { NavItem, Social, Project } from "./app.d";

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
		href: "/blogs",
		text: "Blogs",
		icon: { icon: "bx:bx-book-open", color: "skyblue" }
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
			icon: "pajamas:twitter",
			color: "var(--text-primary)"
		}
	}
];

const projects: Project[] = [
	{
		id: v4(),
		title: "Sichu Nepal",
		thumbnail: "/sichunepal.webp",
		link: "https://www.sichunepal.com",
		description: `
			<strong>Sichu Nepal</strong> is an e-commerce marketplace for products related to pop culture,
			anime, manga and comics. You can buy products like t-shirts, hoodies, posters, stickers,
			keychains, and more. It is built with <strong>Next.js</strong> in the frontend and
			<strong>Node.js</strong>
			in the backend.`
	},
	{
		id: v4(),
		title: "Smart Session Manager (SSM)",
		thumbnail: "/ssm.webp",
		link: "https://github.com/abhiyandhakal/ssm",
		description: `<strong>Smart Session Manager (SSM)</strong> is a tool designed to manage Tmux sessions
		efficiently, focusing on project-based session management. With SSM, you can easily navigate through 
		sessions using simple commands and aliases.`
	},
	{
		id: v4(),
		title: "Kass Text Editor",
		thumbnail: "/kass-text-editor.webp",
		link: "https://github.com/abhiyandhakal/kass-text-editor",
		description: `
			<strong>Kass Text Editor</strong> is a simple terminal based text editor written in Rust. It
			is a simple text editor with basic functionalities like saving, opening, and editing files. It
			also has additional feature of multiple <strong>tabs</strong> which you can switch between to be
			able to edit multiple files.
		`
	},
	{
		id: v4(),
		title: "Power Menu",
		thumbnail: "/power-menu.webp",
		link: "https://github.com/abhiyandhakal/power-menu",
		description: `
			Developed with <strong>Tauri</strong> and <strong>Svelte</strong>,
			<strong>Power Menu</strong> offers a user-friendly interface through a system tray icon (app menu)
			as well as a windowed interface. to perform actions like shutting down, restarting, logging out,
			or suspending the system.`
	},
	{
		id: v4(),
		title: "Abhiyan.zsh",
		thumbnail: "/abhiyan.zsh.webp",
		link: "https://github.com/abhiyandhakal/abhiyan.zsh",
		description: `<strong>Abhiyan.zsh</strong> is a custom zsh theme that I created seeking minimalism. It includes
			decorators for git branch, staged file count, unstaged file count and untract file count, username,
			current working directory and the time.`
	}
];

export { navItems, social, projects };
