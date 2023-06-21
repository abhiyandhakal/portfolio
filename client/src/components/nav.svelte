<script lang="ts">
	import "iconify-icon";

	const navItems: {
		id: number;
		href: string;
		text: string;
		target?: string;
		icon: {
			icon: string;
			color?: string;
		};
	}[] = [
		{ id: 0, href: "/", text: "Home", icon: { icon: "bxs:home" } },
		{
			id: 1,
			href: "/about",
			text: "About Me",
			icon: { icon: "mdi:about", color: "skyblue" }
		},
		{ id: 2, href: "/projects", text: "Projects", icon: { icon: "fluent:folder-48-filled" } },
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

	let active = <number>0;

	if (typeof window !== "undefined") {
		active = navItems.find(({ href }) => href === window.location.pathname)?.id ?? 0;
	}

	// hamburger
	let hamburgerClicked = false;
</script>

<nav class={hamburgerClicked ? "show-nav" : ""}>
	<div>
		<!-- logo -->
		<span class="logo" style="font-size: 1.6rem">
			<a href="/">AbhiyanDhakal</a>
		</span>

		<!-- hamburger -->
		<button class="hamburger-container" on:click={() => (hamburgerClicked = !hamburgerClicked)}>
			<span class="sr-only">Navigation Menu</span>
			<span class={`hamburger ${hamburgerClicked ? "active" : ""}`} aria-label="Navigation Menu" />
		</button>

		<!-- nav items -->
		<ul class={hamburgerClicked ? "show" : ""} role="navigation">
			{#each navItems as { id, href, text, target, icon } (id)}
				<li class="nav-item">
					<span class="link-container">
						<iconify-icon style={icon.color ? `color: ${icon.color};` : ""} icon={icon.icon} />
						<a class={`hover-animate ${id === active ? "active" : null}`} {href} {target}>
							{text}
						</a>
					</span>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style lang="scss">
	$blur: 10px;
	nav {
		position: relative;
		background: var(--bg-secondary);
		height: var(--nav-height);
		display: grid;
		place-items: center;
		backdrop-filter: blur($blur);
		box-shadow: var(--shadow-1);

		& > div {
			width: 100%;
			max-width: var(--max-width);
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-inline: var(--gap-1);

			ul {
				display: flex;
				align-items: center;
				list-style: none;
				gap: calc(var(--gap-1, 1rem) * 1.5);
			}
		}

		.hamburger-container {
			display: none;
		}

		@media (max-width: 50rem) {
			&.show-nav {
				box-shadow: unset;
			}

			.hamburger-container {
				display: block;
			}

			ul {
				position: absolute;
				top: 100%;
				background: var(--bg-secondary);
				margin: 0;
				left: 0;
				width: 100%;
				flex-direction: column;
				backdrop-filter: blur($blur);
				scale: 1 0;
				transition: var(--transition-2);
				transform-origin: top;
				padding-block: var(--gap-1);

				&.show {
					scale: 1 1;
				}
			}
		}
	}

	.link-container {
		display: flex;
		align-items: center;
		gap: 0.3em;

		iconify-icon {
			font-size: 1.2em;
		}
	}
	a {
		color: var(--text-primary);
		text-decoration: none;
		font-weight: 700;
	}

	a.active,
	a:active {
		color: var(--text-secondary);
	}
</style>
