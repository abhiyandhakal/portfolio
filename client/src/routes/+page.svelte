<script lang="ts">
	import Nav from "../components/nav.svelte";
	import Footer from "../components/footer.svelte";
	import "../styles/style.scss";
	import "iconify-icon";
	import type { TechIcon } from "../app.d";
	import { v4 } from "uuid";

	let techList: TechIcon[] = [
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
			href: "https://nodejs.org/en",
			icon: {
				icon: "devicon:nodejs"
			}
		},
		{
			id: v4(),
			href: "https://expressjs.com/",
			icon: {
				icon: "skill-icons:expressjs-light"
			}
		},
		{
			id: v4(),
			href: "https://graphql.org/",
			icon: {
				icon: "mdi:graphql",
				color: "skyblue"
			}
		},
		{
			id: v4(),
			href: "https://www.rust-lang.org/",
			icon: {
				icon: "skill-icons:rust"
			}
		},
		{
			id: v4(),
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
</script>

<header>
	<Nav />

	<section class="hero">
		<section class="hero-desc">
			<div>
				<h1>
					<span class="hi">Hi <iconify-icon icon="noto:waving-hand" />, I'm </span><span
						><span class="name">Abhiyan Dhakal.</span></span
					>
				</h1>
				<h2>I am <span>{getArticle(phrase)} {typingText}</span>.</h2>
			</div>

			<ul class="techs">
				{#each techList as tech (tech.id)}
					<li>
						<a target="_blank" href={tech.href}>
							<iconify-icon
								icon={tech.icon.icon}
								style={tech.icon.color ? `color: ${tech.icon.color};` : ""}
							/>
						</a>
					</li>
				{/each}
			</ul>

			<div class="btn-container">
				<a href="/about" class="btn">About Me</a>
				<a href="/contact" class="btn btn-invert">Let's Chat</a>
			</div>

			<button
				class="scroll-down btn btn-invert glow-effect"
				on:click={scroll}
				data-glow-offset="true"
			>
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
			<h2 id="about-me">About Me</h2>
			<img src="/person.webp" alt="person" />
			<div>
				Hey there <iconify-icon icon="noto:waving-hand" />! I'm <b>Abhiyan Dhakal</b>, a tech
				eithusiast with a diverse skillset as listed below.
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
					<dd>
						I have a knack for creating intuitive and feature-rich desktop applications with ,
						embracing diverse technologies and platforms. With this versatile skill set, I'm eager
						to take on new challenges and contribute to innovative projects. Let's collaborate and
						create something exceptional together!
					</dd>
				</dl>
			</div>

			<a class="read-more" href="/about">Read More >></a>
		</div>
	</section>
</main>

<Footer />

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
		font-size: var(--fz-3xl);
		font-weight: 400;
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

	.techs {
		display: flex;
		font-size: 3rem;

		list-style: none;
		padding: 0;
		margin: 0;

		li {
			display: block;
			padding: calc(var(--gap-lg) / 2);

			&:hover {
				background-color: var(--bg-secondary);
				border-radius: var(--radius-1);
				opacity: 0.8;
			}
		}
	}

	.scroll-down {
		aspect-ratio: 1;
		width: fit-content;
		margin-block: calc(var(--gap-1) * 3);
		position: absolute;
		display: none;
		bottom: var(--gap-1);
		border-radius: 50%;

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

		[aria-labelledby="about-me"] {
			padding: var(--gap-lg);

			.container {
				padding: var(--gap-lg);
				border-radius: var(--radius-xl);
				background: var(--bg-primary);
				display: grid;
				max-width: var(--max-width);
				margin-inline: auto;
				grid-template-columns: 0.5fr 1fr;
				font-size: var(--fz-lg);
				place-items: center;
				place-content: center;
				gap: var(--gap-lg);
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
				bottom: var(--gap-lg);
				left: 50%;
				transform: translateX(-50%);
				color: var(--text-secondary);
			}
		}
	}
</style>
