<script lang="ts">
	import "$styles/style.scss";
	import "iconify-icon";
	import { v4 } from "uuid";
	import type { TechIcon } from "../../app.d";

	const frontEndIcons: TechIcon[] = [
		{
			id: v4(),
			name: "HTML",
			href: "https://www.w3.org/html/",
			icon: {
				icon: "vscode-icons:file-type-html"
			}
		},
		{
			id: v4(),
			name: "CSS",
			href: "https://www.w3.org/Style/CSS/",
			icon: {
				icon: "vscode-icons:file-type-css"
			}
		},
		{
			id: v4(),
			name: "SCSS",
			href: "https://sass-lang.com/",
			icon: {
				icon: "vscode-icons:file-type-scss"
			}
		},
		{
			id: v4(),
			name: "Tailwind CSS",
			href: "https://tailwindcss.com/",
			icon: {
				icon: "skill-icons:tailwindcss-light"
			}
		},
		{
			id: v4(),
			name: "JavaScript",
			href: "https://www.javascript.com/",
			icon: {
				icon: "logos:javascript"
			}
		},
		{
			id: v4(),
			name: "TypeScript",
			href: "https://www.typescriptlang.org/",
			icon: {
				icon: "logos:typescript-icon"
			}
		},
		{
			id: v4(),
			name: "React JS",
			href: "https://react.dev/",
			icon: {
				icon: "logos:react"
			}
		},
		{
			id: v4(),
			name: "Svelte",
			href: "https://svelte.dev/",
			icon: {
				icon: "skill-icons:svelte"
			}
		}
	];

	const fullStackIcons: TechIcon[] = [
		{
			id: v4(),
			name: "Next JS",
			href: "https://nextjs.org/",
			icon: {
				icon: "teenyicons:nextjs-outline",
				color: "var(--text-primary)"
			}
		},
		{
			id: v4(),
			name: "SvelteKit",
			href: "https://kit.svelte.dev/",
			icon: {
				icon: "vscode-icons:file-type-svelte"
			}
		},
		{
			id: v4(),
			name: "Vite JS",
			href: "https://vitejs.dev/",
			icon: {
				icon: "logos:vitejs-icon"
			}
		}
	];

	const backendIcons: TechIcon[] = [
		{
			id: v4(),
			name: "Node JS",
			href: "https://nodejs.org/en/",
			icon: {
				icon: "logos:nodejs-icon"
			}
		},
		{
			id: v4(),
			name: "Express JS",
			href: "https://expressjs.com/",
			icon: {
				icon: "skill-icons:expressjs-light"
			}
		},
		{
			id: v4(),
			name: "MongoDB",
			href: "https://www.mongodb.com/",
			icon: {
				icon: "logos:mongodb-icon"
			}
		},
		{
			id: v4(),
			name: "GraphQL",
			href: "https://graphql.org/",
			icon: {
				icon: "logos:graphql"
			}
		}
	];

	const desktopIcons: TechIcon[] = [
		{
			id: v4(),
			name: "Tauri",
			href: "https://tauri.app/",
			icon: {
				icon: "logos:tauri"
			}
		},
		{
			id: v4(),
			name: "Electron JS",
			href: "https://www.electronjs.org/",
			icon: {
				icon: "fontisto:electronjs",
				color: "var(--text-primary)"
			}
		}
	];
</script>

<header>
	<h1 class="h1">About Me</h1>
</header>

<main id="content">
	Hi<iconify-icon icon="noto:waving-hand" />! I'm <b>Abhiyan Dhakal</b>, a tech eithusiast with a
	diverse skillset. I am currently studying in
	<a href="https://soe.ku.edu.np/" target="_blank">Kathmandu University, School of Engineering</a>,
	pursuing Computer Engineering, currently in 5<sup>th</sup> semester.

	<section aria-labelledby="full-stack">
		<h2 class="h2" id="full-stack">Full Stack Web Developer:</h2>
		<p>
			I excel in both <b>front-end</b> and <b>back-end</b> technologies, crafting visually appealing
			web interfaces with robust functionality.
		</p>
		<!-- frontend icons -->
		<div class="container">
			<p class="center-text">Here are some front-end technologies I am familiar with:</p>
			<ul class="tech-list">
				{#each frontEndIcons as { id, name, href, icon } (id)}
					<li>
						<a {href} target="_blank" class="tooltip">
							<iconify-icon icon={icon.icon} style={icon.color ? `color: ${icon.color}` : ""} />
							<span class="tooltiptext">{name}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<p>
			Using these frontend technologies, I have built several web applications, including portfolio.
		</p>

		<p>
			I am also well versed in JavaScript / TypeScript based backend technologies like NodeJS,
			ExpressJs etc.
		</p>

		<!-- backend icons -->
		<div class="container">
			<p class="center-text">Here are some backend technologies I am familiar with:</p>
			<ul class="tech-list">
				{#each backendIcons as { id, name, href, icon } (id)}
					<li>
						<a {href} target="_blank" class="tooltip">
							<iconify-icon icon={icon.icon} style={icon.color ? `color: ${icon.color}` : ""} />
							<span class="tooltiptext">{name}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<p>
			I am well versed in these backend technologies, and I have built several backend applications.
		</p>

		<p>
			There are various full-stack frameworks that help integrate the frontend and the backend well.
			I am also well versed in a couple of them. One of them, SvelteKit, is the framework the
			current portfolio website is based on.
		</p>

		<!-- fullstack icons -->
		<div class="container">
			<p class="center-text">Here are some fullstack technologies I am familiar with:</p>
			<ul class="tech-list">
				{#each fullStackIcons as { id, name, href, icon } (id)}
					<li>
						<a {href} target="_blank" class="tooltip">
							<iconify-icon icon={icon.icon} style={icon.color ? `color: ${icon.color}` : ""} />
							<span class="tooltiptext">{name}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section aria-labelledby="desktop">
		<h2 id="desktop" class="h2">Desktop App Developer:</h2>
		<p>I have a knack for creating intuitive and feature-rich desktop applications.</p>

		<!-- desktop framework icons -->
		<div class="container">
			<p class="center-text">Here are some desktop application framworks I am familiar with:</p>
			<ul class="tech-list">
				{#each desktopIcons as { id, name, href, icon } (id)}
					<li>
						<a {href} target="_blank" class="tooltip">
							<iconify-icon icon={icon.icon} style={icon.color ? `color: ${icon.color}` : ""} />
							<span class="tooltiptext">{name}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section aria-labelledby="tui-app">
		<h2 class="h2" id="tui-app">TUI Application Dev:</h2>
		<p>
			I enjoy building powerful and efficient Text User Interface applications, providing seamless
			user interactions using <a href="https://www.rust-lang.org/" target="_blank"
				>Rust programming language</a
			>.
		</p>
	</section>

	<section aria-labelledby="linux">
		<h2 class="h2" id="linux">Linux Enthusiast:</h2>
		<p>
			My love for Linux, both on desktop as well as server, drives me to explore and optimize its
			open-source environment actively.
		</p>
	</section>

	<p>
		With this versatile skill set, I'm eager to take on new challenges and contribute to innovative
		projects. Let's collaborate and create something exceptional together!
	</p>
</main>

<style lang="scss">
	main {
		width: 100%;
		max-width: 90ch;
		padding: var(--gap-1);
		margin-inline: auto;
		font-size: var(--fz-xl);

		b {
			color: var(--text-secondary);
			font-weight: 700;
		}

		a {
			color: var(--text-link);
		}

		h2 {
			font-size: var(--fz-2xl);
			margin-block: var(--gap-lg);
		}
	}

	p {
		margin-block: var(--gap-lg);
	}

	.container {
		background: var(--bg-secondary);
		padding: var(--gap-lg);
		border-radius: var(--radius-xl);
		margin-block: var(--gap-lg);
	}

	.center-text {
		text-align: center;
	}

	.tech-list {
		justify-content: center;
		font-size: var(--fz-3xl);

		li {
			padding: var(--gap-small);
		}

		li:hover {
			background: var(--bg-primary);
		}
	}
</style>
