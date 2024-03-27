<script lang="ts">
	export let title: string, thumbnail: string, link: string, relatedContentLink: string | null;
</script>

<div class="card">
	<a href={link} target="_blank">
		<img class="thumbnail" src={thumbnail} alt={title} />
	</a>
	<div class="card-content">
		<h2 class="title">{title}</h2>
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
		height: 20rem;

		.thumbnail {
			border-radius: var(--radius-lg) 0 0 var(--radius-lg);
			object-fit: cover;
			height: 20rem;
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
			gap: var(--gap-lg);
			align-content: space-between;

			@media (max-width: 768px) {
				scale: 0;
			}

			.title {
				font-size: var(--fz-3xl);
				font-weight: 500;
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
