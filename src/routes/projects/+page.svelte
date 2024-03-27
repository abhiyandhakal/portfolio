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

		<ProjectCard
			title="Power Menu"
			thumbnail="/power-menu.webp"
			link="https://github.com/abhiyandhakal/power-menu"
			relatedContentLink={null}
		>
			Developed with <strong>Tauri</strong> and <strong>Svelte</strong>,
			<strong>Power Menu</strong> offers a user-friendly interface through a system tray icon (app menu)
			as well as a windowed interface. to perform actions like shutting down, restarting, logging out,
			or suspending the system.
		</ProjectCard>

		<ProjectCard
			title={"Abhiyan.zsh"}
			thumbnail="/abhiyan.zsh.webp"
			link={"https://github.com/abhiyandhakal/abhiyan.zsh"}
			relatedContentLink={null}
		>
			<strong>Abhiyan.zsh</strong> is a custom zsh theme that I created seeking minimalism. It includes
			decorators for git branch, staged file count, unstaged file count and untract file count, username,
			current working directory and the time.
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
		gap: var(--gap-xl);

		@media (max-width: 768px) {
			gap: var(--gap-lg);
		}
	}
</style>
