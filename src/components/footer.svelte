<script lang="ts">
	import "$styles/style.scss";
	import "iconify-icon";
	import { navItems, social } from "../data";
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
				{#each social as { id, href, icon, text } (id)}
					<li>
						<a {href} target="_blank" class="icon">
							<iconify-icon icon={icon.icon} style={icon.color ? `color: ${icon.color};` : ""} />
						</a>
						<a {href} target="_blank" class="text">{text}</a>
					</li>
				{/each}
			</ul>
		</section>

		<hr />

		<section class="contact-info">
			<h2>Contact Me</h2>

			<ul>
				<li>
					<iconify-icon icon="material-symbols:mail" />
				</li>
				<li>
					<a href="mailto:itsabhiyandhakal@gmail.com"> itsabhiyandhakal@gmail.com</a>
				</li>
			</ul>
		</section>

		<section class="copyright">
			<p>Copyright (c) 2023 <span>Abhiyan Dhakal</span>. All rights reserved.</p>
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

			& > * {
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

				&:first-child::before {
					content: "";
					position: absolute;
					height: 100%;
					width: 2px;
					background: var(--bg-primary);
					border-radius: 100%;
					left: 0;

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
			display: grid;
			justify-content: center;
			font-size: var(--fz-2xl);

			li {
				display: flex;
				align-items: start;
				gap: var(--gap-small);

				.text {
					font-size: var(--fz-xl);
					color: var(--text-link);
					text-decoration: none;
				}

				a {
					padding: var(--gap-small);
					display: block;
					transition: var(--transition-1);

					&:hover {
						background: var(--bg-secondary);
						border-radius: var(--radius-1);
					}
				}
			}
		}
	}

	.navigation {
		display: grid;
		justify-items: center;
		align-items: start;

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

			span {
				color: var(--text-primary);
				font-weight: 700;
			}
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

	.contact-info {
		display: grid;
		// place-items: center;
		justify-items: center;
		ul {
			display: grid;
			padding: var(--gap-1);
			place-items: center;
			gap: var(--gap-small);

			iconify-icon {
				font-size: var(--fz-4xl);
				color: var(--text-link);
			}

			a {
				color: var(--text-link);
				font-size: var(--fz-lg);
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>
