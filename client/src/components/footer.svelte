<script lang="ts">
	import "iconify-icon";
	import { navItems, social } from "../data";

	const handleContactForm = (e: Event) => {
		e.preventDefault();
	};
</script>

<footer>
	<div>
		<section class="navigation">
			<h2>Navigation</h2>
			<ul>
				{#each navItems as { id, href, text, icon } (id)}
					<li class="nav-item">
						<span class="link-container">
							<iconify-icon style={icon.color ? `color: ${icon.color};` : ""} icon={icon.icon} />
							<a class="hover-animate" {href}>
								{text}
							</a>
						</span>
					</li>
				{/each}
			</ul>
		</section>

		<hr />

		<section class="social-media">
			<h2>Social Media</h2>
			<ul>
				{#each social as { id, href, icon } (id)}
					<li>
						<a {href}>
							<iconify-icon icon={icon.icon} style={icon.color ? `color: ${icon.color};` : ""} />
						</a>
					</li>
				{/each}
			</ul>
		</section>

		<hr />

		<form class="contact-form" on:submit={handleContactForm}>
			<h2>Contact Me</h2>
			<label for="email">Email</label>
			<input type="email" class="textbox" placeholder="your@example.com" id="email" />

			<label for="content">Content</label>
			<textarea class="textbox" name="content" id="content" placeholder="Write your body here" />

			<button class="btn" type="submit">Send</button>
		</form>

		<section class="copyright">
			<p>Copyright (c) 2023 <b>Abhiyan Dhakal</b>. All rights reserved.</p>
		</section>
	</div>
</footer>

<style lang="scss">
	$screen: 60rem;

	hr {
		width: 100%;
		border: none;
		border-radius: 100%;
		display: block;
		height: 2px;
		background: var(--bg-primary);

		@media (min-width: $screen) {
			display: none;
		}
	}

	h2 {
		color: var(--text-secondary);
		font-size: var(--fz-2xl);
		font-weight: 700;
		margin-bottom: var(--gap-small);
	}

	footer {
		display: grid;
		place-items: center;
		background: var(--bg-header-footer);
		box-shadow: var(--shadow-1);
		padding: calc(var(--gap-1) / 2) var(--gap-1);

		& > div {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			max-width: var(--max-width);

			@media (max-width: $screen) {
				grid-template-columns: 1fr;
				gap: var(--gap-lg);
				justify-items: center;
			}

			& > section {
				position: relative;

				&::after {
					content: "";
					position: absolute;
					height: 100%;
					width: 2px;
					background: var(--bg-primary);
					border-radius: 100%;
					right: 0;

					@media (max-width: $screen) {
						height: 2px;
						width: 100%;
						bottom: 0;
						content: unset;
					}
				}
			}

			& > :last-child {
				grid-template-columns: repeat(3, 1fr);
				grid-column: 1 / -1;

				&::after {
					content: unset;
				}
			}
		}
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.social-media {
		display: grid;
		gap: calc(var(--gap-small) * 3);
		align-content: start;
		justify-items: center;

		ul {
			display: flex;
			justify-content: center;
			gap: var(--gap-small);
			width: fit-content;
			font-size: var(--fz-2xl);
		}
	}

	.navigation {
		display: grid;
		justify-items: center;

		ul {
			width: fit-content;
			display: grid;
			gap: calc(var(--gap-small) / 2);

			@media (max-width: $screen) {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
			}
		}

		.nav-item {
			.link-container {
				display: flex;
				align-items: center;
				gap: 0.3rem;
				width: fit-content;

				a {
					color: var(--text-primary);
					text-decoration: none;
					font-size: var(--fz-lg);
					font-weight: 700;

					&:hover {
						color: var(--text-secondary);
					}
				}
			}
		}
	}

	.contact-form {
		display: grid;
		width: fit-content;
		grid-template-columns: 0.5fr 1.5fr;
		align-items: center;
		gap: var(--gap-small);
		position: relative;
		padding-left: var(--gap-lg);

		& > :first-child {
			grid-column: 1 / -1;
		}

		h2 {
			justify-self: center;
		}

		.btn {
			width: fit-content;
			grid-column: 2 / -1;
		}
	}

	iconify-icon {
		font-size: 1.2em;
	}

	.copyright {
		font-size: var(--fz-xl);
		color: var(--text-secondary);
		padding-block: var(--gap-small);

		p {
			text-align: center;
			padding-block-start: var(--gap-small);
		}

		&::before {
			content: "";
			width: 100%;
			height: 2px;
			border-radius: 100%;
			background: var(--bg-primary);
			display: block;
			margin: var(--gap-small);
		}
	}
</style>
