<script lang="ts">
	export let title: string, thumbnail: string, link: string, relatedContentLink: string | null;
</script>

<div class="card">
	<a href={link} target="_blank">
		<img class="thumbnail" src={thumbnail} alt={title} />
	</a>
	<div class="card-content">
		<h2 class="title"><a href={link}>{title}</a></h2>
		<p class="description">
			<slot />
		</p>

		<div class="btn-container">
			<a href={link} class="btn" target="_blank"> View </a>
			{#if relatedContentLink}
				<a href={relatedContentLink} class="btn btn-invert">Read More</a>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		background: var(--bg-secondary);
		border-radius: var(--radius-lg);
		display: grid;
		grid-template-columns: auto 1fr;
		--height: 18rem;
		height: var(--height);

		.thumbnail {
			border-radius: var(--radius-lg) 0 0 var(--radius-lg);
			object-fit: cover;
			height: var(--height);
			aspect-ratio: 1;
			cursor: pointer;
			transition: transform 0.3s ease;

			&:hover {
				transform: rotate(-5deg);
			}
		}

		.card-content {
			padding: var(--gap-lg);
			display: grid;
			align-content: space-between;

			@media (max-width: 768px) {
				scale: 0;
			}

			.title {
				font-size: var(--fz-3xl);
				font-weight: 500;

				a {
					color: var(--text-primary);
					text-decoration: none;
					transition: color 0.2s ease;

					&:hover {
						color: var(--text-secondary);
					}
				}
			}

			.btn-container {
				display: flex;
				justify-content: end;
				padding-top: var(--gap-small);

				& > * {
					scale: 0.9;
				}
			}
		}
	}
</style>
