<script lang="ts">
	import type { Project } from "$db/models/project";

	export let data: { projects: Project[] } = { projects: [] };

	const getImage = ({ thumbnail }: Project): string => {
		if (thumbnail.buffer) {
			const file = new Blob([thumbnail.buffer], { type: thumbnail.type });
			console.log(file);
		}

		return "";
	};
</script>

<header>
	<h1 class="h1">My Projects</h1>
</header>

<main>
	{#each data?.projects as project (project.repo)}
		<div>
			<img src={getImage(project)} alt={project.name} />
		</div>
	{/each}
</main>

<style lang="scss">
	main {
		min-height: 50vh;
	}
</style>
