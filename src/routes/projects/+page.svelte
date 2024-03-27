<script lang="ts">
	import ProjectCard from "$components/project-card.svelte";
</script>

<header>
	<h1 class="h1">My Projects</h1>
</header>

<main>
	<section class="card-container">
		<ProjectCard
			title={"Kass Text Editor"}
			thumbnail="/kass-text-editor.webp"
			link={"https://github.com/abhiyandhakal/kass-text-editor"}
			relatedContentLink={null}
		>
			<strong>Kass Text Editor</strong> is a simple terminal based text editor written in Rust. It
			is a simple text editor with basic functionalities like saving, opening, and editing files. It
			also has additional feature of multiple <strong>tabs</strong> which you can switch between to be
			able to edit multiple files.
		</ProjectCard>
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
		gap: var(--gap-lg);
	}
</style>
