<script lang="ts">
	import "../../styles/style.scss";
	import Nav from "../../components/nav.svelte";
	import Footer from "../../components/footer.svelte";
	import "iconify-icon";
	import { v4 } from "uuid";
	import type { TechIcon } from "../../app.d";

	const frontEndIcons: TechIcon[] = [
		{
			id: v4(),
			href: "https://www.w3.org/html/",
			icon: {
				icon: "vscode-icons:file-type-html"
			}
		},
		{
			id: v4(),
			href: "https://www.w3.org/Style/CSS/",
			icon: {
				icon: "vscode-icons:file-type-css"
			}
		},
		{
			id: v4(),
			href: "https://sass-lang.com/",
			icon: {
				icon: "vscode-icons:file-type-scss"
			}
		},
		{
			id: v4(),
			href: "https://www.javascript.com/",
			icon: {
				icon: "logos:javascript"
			}
		},
		{
			id: v4(),
			href: "https://www.typescriptlang.org/",
			icon: {
				icon: "logos:typescript-icon"
			}
		},
		{
			id: v4(),
			href: "https://react.dev/",
			icon: {
				icon: "logos:react"
			}
		},
		{
			id: v4(),
			href: "https://svelte.dev/",
			icon: {
				icon: "skill-icons:svelte"
			}
		},
		{
			id: v4(),
			href: "https://nextjs.org/",
			icon: {
				icon: "teenyicons:nextjs-outline",
				color: "var(--text-primary)"
			}
		}
	];
</script>

<header>
	<Nav />
	<h1 class="h1">About Me</h1>
</header>

<main>
	Hi<iconify-icon icon="noto:waving-hand" />! I'm <b>Abhiyan Dhakal</b>, a tech eithusiast with a
	diverse skillset. I am currently studying in
	<a href="https://soe.ku.edu.np/" target="_blank">Kathmandu University, School of Engineering</a>,
	pursuing Computer Engineering, currently in 4<sup>th</sup> semester.
	<section aria-labelledby="full-stack">
		<h2 class="h2" id="full-stack">Full Stack Web Developer:</h2>
		<div>
			<p>
				I excel in both <b>front-end</b> and <b>back-end</b> technologies, crafting visually appealing
				web interfaces with robust functionality.
			</p>
			<br />
			<p class="center-text">Here are some front-end technologies I am familiar with:</p>
			<ul class="tech-list">
				{#each frontEndIcons as { id, href, icon } (id)}
					<li>
						<a {href} target="_blank">
							<iconify-icon icon={icon.icon} style={icon.color ? `color: ${icon.color}` : ""} />
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>
	<dt>TUI Application Dev:</dt>
	<dd>
		I enjoy building powerful and efficient Text User Interface applications, providing seamless
		user interactions.
	</dd>
	<dt>Linux Enthusiast:</dt>
	<dd>My love for Linux drives me to explore and optimize its open-source environment actively.</dd>
	<dt>Desktop App Developer:</dt>
	<dd>I have a knack for creating intuitive and feature-rich desktop applications.</dd>

	With this versatile skill set, I'm eager to take on new challenges and contribute to innovative
	projects. Let's collaborate and create something exceptional together!
</main>

<Footer />

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
			margin-bottom: var(--gap-lg);
		}

		section {
			padding: var(--gap-lg);
			margin-block: var(--gap-lg);
			border-radius: var(--radius-xl);
			background: var(--bg-secondary);
		}
	}

	.center-text {
		text-align: center;
	}

	.tech-list {
		justify-content: center;
		font-size: var(--fz-3xl);

		li:hover {
			background: var(--bg-primary);
		}
	}
</style>
