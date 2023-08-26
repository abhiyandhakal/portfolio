<script lang="ts">
	import "$styles/style.scss";
	import AddProject from "./add-project.svelte";
	import Search from "./search.svelte";
	import type { PageServerData } from "../$types";

	export let data: PageServerData | { authenticated: boolean };

	let currentTab = "add-project";

	const tabs = [
		{
			name: "add-project",
			label: "Add project",
			item: AddProject
		},
		{
			name: "search",
			label: "Search projects",
			item: Search
		}
	];
</script>

<header>
	<h1 class="h1">Dashboard</h1>
</header>

<main>
	{#if data?.authenticated}
		<form action="?/logout" method="post">
			<button class="btn logout">Log Out</button>
		</form>

		<div class="tabs-container">
			{#each tabs as tab}
				<button class="btn" on:click={() => (currentTab = tab.name)}>{tab.label}</button>
			{/each}
		</div>

		{#each tabs as tab}
			{#if currentTab === tab.name}
				<svelte:component this={tab.item} />
			{/if}
		{/each}
	{:else}
		<h2 class="h2">You are not authenticated</h2>

		<p>
			Please <a class="link" href="/signin">sign in</a> to access the dashboard.
		</p>
	{/if}
</main>

<style lang="scss">
	main {
		min-height: 50vh;
		margin-inline: auto;
		max-width: var(--max-width);
		padding-inline: var(--gap-lg);
	}

	p {
		text-align: center;
		padding: var(--gap-lg);
		font-size: var(--fz-2xl);
	}

	.logout {
		position: absolute;
		top: calc(var(--nav-height) + var(--gap-lg));
		right: var(--gap-lg);
	}

	.tabs-container {
		display: flex;
		justify-content: center;
		gap: var(--gap-small);
		flex-wrap: wrap;
	}
</style>
