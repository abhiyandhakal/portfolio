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
			<!-- It is a power menu application written in Tauri with svelte on frontend. It is a simple power -->
			<!-- menu that can be used to shutdown, restart, logout, and lock the system. -->
			<!-- <strong>Power Menu</strong> is an application written in <strong>Tauri</strong> with -->
			<!-- <strong>Svelte</strong> on frontend. It includes features like shutdown, restart, logout, and suspend -->
			<!-- the system. It also has an app menu that shows up in the system tray. -->

			<strong>Power Menu</strong> is a handy application that lets you control your system's power
			state. Developed with <strong>Tauri</strong> and <strong>Svelte</strong>, it offers a
			user-friendly interface through a system tray icon (app menu). From this menu, you can perform
			actions like shutting down, restarting, logging out, or even suspending your system.
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
