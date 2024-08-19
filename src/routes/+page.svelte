<script lang="ts">
	import "$styles/style.scss";
	import "iconify-icon";
	import type { TechIcon } from "../app.d";
	import { v4 } from "uuid";
	import { projects } from "$data";

	// import function to register Swiper custom elements
	import { register } from "swiper/element/bundle";
	import { onMount } from "svelte";
	// register Swiper custom elements
	register();

	const techList: TechIcon[] = [
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
		},
		{
			id: v4(),
			name: "Node JS",
			href: "https://nodejs.org/en",
			icon: {
				icon: "devicon:nodejs"
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
			name: "GraphQL",
			href: "https://graphql.org/",
			icon: {
				icon: "mdi:graphql",
				color: "skyblue"
			}
		},
		{
			id: v4(),
			name: "Rust",
			href: "https://www.rust-lang.org/",
			icon: {
				icon: "skill-icons:rust"
			}
		},
		{
			id: v4(),
			name: "Tauri",
			href: "https://tauri.app/",
			icon: {
				icon: "skill-icons:tauri-light"
			}
		}
	];

	let captionList = [
		"Full Stack Web Dev",
		"TUI Application Dev",
		"Linux Enthusiast",
		"Desktop App Developer"
	];

	let currentCaptionIndex = 0;
	let phrase = captionList[currentCaptionIndex];

	const updateCaption = () => {
		currentCaptionIndex = (currentCaptionIndex + 1) % captionList.length;
		phrase = captionList[currentCaptionIndex];
	};

	const getArticle = (phrase: string): string => {
		let vowels = ["a", "e", "i", "o", "u"];

		if (vowels.includes(phrase[0].toLowerCase())) {
			return "an";
		} else {
			return "a";
		}
	};

	let i = 0;
	let isCompleted = false;
	let partPhrase = "";
	let speed = 100;
	let startSpeed = 100;
	let stopSpeed = 2000;
	let backSpeed = 30;
	let typingText = "";

	function loop() {
		if (i < phrase.length && !isCompleted) {
			i++;
			partPhrase = phrase.slice(0, i + 1) + "|";

			if (i === phrase.length) {
				speed = stopSpeed;
			} else {
				speed = startSpeed;
			}
		} else if (i >= 0) {
			isCompleted = true;
			i--;
			partPhrase = phrase.slice(0, i + 1) + "|";
			speed = backSpeed;

			if (partPhrase === "|") {
				updateCaption();
			}
		} else {
			isCompleted = false;
			i++;
			speed = startSpeed;
		}

		typingText = partPhrase;

		setTimeout(loop, speed);
	}

	loop();

	const scroll = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: "smooth"
		});
	};

	function getSlidesPerView(size: number): number {
		if (size < 600) return 1;
		if (size < 900) return 2;
		if (size < 1300) return 3;
		return 4;
	}

	let slidesPerView = 3;
	onMount(() => {
		slidesPerView = getSlidesPerView(window.innerWidth);
		window.addEventListener("resize", () => {
			slidesPerView = getSlidesPerView(window.innerWidth);
		});
	});
</script>

<header>
	<section class="hero" id="content">
		<section class="hero-desc">
			<div>
				<h1>
					<span class="hi font-bold">Hi <iconify-icon icon="noto:waving-hand" />, I'm </span><span
						><span class="name font-bold">Abhiyan Dhakal.</span></span
					>
				</h1>
				<h2 class="text-2xl font-bold">I am <span>{getArticle(phrase)} {typingText}</span>.</h2>
			</div>

			<ul class="tech-list">
				{#each techList as tech (tech.id)}
					<li>
						<a target="_blank" class="tooltip" href={tech.href}>
							<iconify-icon
								icon={tech.icon.icon}
								style={tech.icon.color ? `color: ${tech.icon.color};` : ""}
							/>
							<span class="tooltiptext">{tech.name}</span>
						</a>
					</li>
				{/each}
			</ul>

			<div class="btn-container">
				<a href="/about" class="btn">About Me</a>
				<a href="mailto:itsabhiyandhakal@gmail.com" class="btn btn-invert">Let's Talk</a>
			</div>

			<button class="scroll-down btn-invert glow-effect" on:click={scroll} data-glow-offset="true">
				<iconify-icon icon="pajamas:scroll-down" />
				<svg class="glow-container">
					<rect rx="10000" pathLength="100" stroke-linecap="round" class="glow-blur" />
					<rect rx="10000" pathLength="100" stroke-linecap="round" class="glow-line" />
				</svg>
			</button>
		</section>

		<img src="/abhiyan.webp" alt="Abhiyan" />
	</section>
</header>

<main>
	<!-- about -->
	<section aria-labelledby="about-me">
		<div class="container">
			<h2 class="h2" id="about-me">About Me</h2>
			<img src="/person.webp" alt="person" />
			<div>
				Hey there <iconify-icon icon="noto:waving-hand" />! I'm <b>Abhiyan Dhakal</b>, a tech
				enthusiast with a diverse skillset as listed below.
				<dl>
					<dt>Full Stack Web Developer:</dt>
					<dd>
						I excel in both front-end technologies (React, Svelte) and back-end technologies
						(Express), crafting visually appealing web interfaces with robust functionality.
					</dd>
					<dt>TUI Application Dev:</dt>
					<dd>
						I enjoy building powerful and efficient Text User Interface applications, providing
						seamless user interactions.
					</dd>
					<dt>Linux Enthusiast:</dt>
					<dd>
						My love for Linux drives me to explore and optimize its open-source environment
						actively.
					</dd>
					<dt>Desktop App Developer:</dt>
					<dd>I have a knack for creating intuitive and feature-rich desktop applications.</dd>
				</dl>

				With this versatile skill set, I'm eager to take on new challenges and contribute to
				innovative projects. Let's collaborate and create something exceptional together!
			</div>

			<a class="read-more" href="/about">Read More >></a>
		</div>
	</section>

	<!-- projects -->
	<section aria-labelledby="projects">
		<div class="container">
			<h2 class="h2" id="projects">My Projects</h2>

			<swiper-container
				slides-per-view={slidesPerView}
				class="max-w-[var(--max-width)] w-screen p-4 grid place-content-center"
				mousewheel="true"
				navigation="true"
				pagination="true"
			>
				{#each projects as { id, title, thumbnail, link } (id)}
					<swiper-slide class="w-80 grid place-content-center">
						<div
							class="bg-[var(--bg-secondary)] grid place-items-center w-80 rounded-2xl shadow-2xl"
						>
							<a href={link} class="hover:[&_img]:-rotate-6" target="_blank">
								<img src={thumbnail} alt={title} class="h-80 w-80 rounded-t-2xl transition" />
							</a>
							<h2
								class="h3 text-[var(--text-primary)] hover:text-[var(--text-secondary)] h-24 p-4 grid place-items-center"
							>
								<a target="_blank" href={link} class="text-center">{title}</a>
							</h2>
						</div>
					</swiper-slide>
				{/each}
			</swiper-container>
			<a class="read-more text-[var(--text-link)]" href="/projects">View More Projects>></a>
		</div>
	</section>
</main>

<style lang="scss">
	header {
		background: var(--bg-primary);
	}

	.hero {
		display: flex;
		justify-content: space-between;

		height: calc(100vh - var(--nav-height));
		max-width: var(--max-width);
		margin: 0 auto;
		padding: var(--gap-1);
		padding-block-end: 0;
		min-height: 40rem;

		@media (max-width: 50rem) {
			flex-direction: column;

			img {
				height: 75%;
			}
		}
	}

	img {
		display: block;
		object-fit: contain;
		object-position: right bottom;
		overflow: hidden;
	}

	h1 {
		font-size: 3rem;

		.hi {
			display: flex;
			align-items: center;
			gap: var(--gap-small);
		}

		& > span {
			display: block;
		}

		.name {
			font-size: clamp(3rem, 5vw, 5rem);
			color: var(--text-secondary);
		}
	}

	h2 {
		margin-bottom: var(--gap-small);

		@media (max-width: 36rem) {
			font-size: var(--fz-xl);
		}

		span {
			color: skyblue;
		}
	}

	.btn-container {
		display: flex;
		gap: var(--gap-lg);

		.btn {
			font-size: var(--fz-2xl);
		}
	}

	.hero-desc {
		display: grid;
		align-content: start;

		gap: var(--gap-lg);

		padding-block: var(--gap-1);
	}

	.scroll-down {
		aspect-ratio: 1;
		width: fit-content;
		margin-block: calc(var(--gap-1) * 3);
		position: absolute;
		display: none;
		bottom: calc(var(--gap-1) * 0.5);
		border-radius: 50%;
		padding: var(--gap-lg);
		height: 7rem;

		font-size: 4rem;
		padding-top: var(--gap-small);

		@media (min-width: 50rem) and (min-height: 60rem) {
			display: block;
		}

		animation: scroll 1s ease-in-out infinite alternate;
	}

	@keyframes scroll {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(1rem);
		}
	}

	b {
		color: var(--text-secondary);
	}

	// main
	main {
		section {
			background: var(--bg-secondary);

			&:nth-child(2n) {
				background: var(--bg-primary);
			}
		}

		.container {
			padding: var(--gap-lg);
			display: grid;
			gap: var(--gap-lg);
			margin-inline: auto;
			max-width: var(--max-width);
			place-items: center;
			place-content: center;
			padding-bottom: calc(var(--gap-lg) * 2);
		}

		[aria-labelledby="about-me"] {
			padding: var(--gap-lg);

			.container {
				padding: var(--gap-lg);
				border-radius: var(--radius-xl);
				grid-template-columns: 0.5fr 1fr;
				font-size: var(--fz-lg);
				position: relative;
				padding-bottom: calc(var(--gap-lg) * 2);

				@media (max-width: 1000px) {
					grid-template-columns: 1fr;

					img {
						display: none;
					}
				}

				h2 {
					text-align: center;
					grid-column: 1/-1;
				}

				img {
					height: 100%;
					border-radius: var(--radius-xl);
					object-fit: cover;
					object-position: center;
					max-height: 35rem;
				}

				dl {
					margin-block: var(--gap-small);

					dt {
						color: var(--text-secondary);
						font-weight: 600;
						margin-block: var(--gap-small);
					}

					dd {
						margin-inline: var(--gap-small);
					}
				}
			}

			.read-more {
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				color: var(--text-link);
			}
		}
	}

	swiper-container::part(button-next) {
		background: var(--bg-primary);
		@apply p-2 rounded;
	}

	swiper-container::part(button-prev) {
		background: var(--bg-primary);
		@apply p-2 rounded;
	}
</style>
