<script lang="ts">
	import ProjectCard from "$components/project-card.svelte";
	import { projects } from "$data";
</script>

<header>
	<h1 class="h1">My Projects</h1>
</header>

<main id="content">
	<section class="card-container">
		{#each projects as { id, link, title, description, thumbnail } (id)}
			<ProjectCard {link} {title} relatedContentLink={null} {thumbnail}>
				{@html description}
			</ProjectCard>
		{/each}
	</section>
</main>

<style lang="scss">
	main {
		min-height: 50vh;
		max-width: 60rem;
		margin-inline: auto;
		padding: var(--gap-1);
	}

	.card-container {
		display: grid;
		gap: var(--gap-xl);

		@media (max-width: 768px) {
			gap: var(--gap-lg);
		}
	}
</style>
