<script lang="ts">
	import "$styles/style.scss";
	import Nav from "$components/nav.svelte";
	import Footer from "$components/footer.svelte";
	import type { PageServerData } from "../$types";

	export let data: PageServerData | { authenticated: boolean };
</script>

<header>
	<Nav />
	<h1 class="h1">Dashboard</h1>
</header>

<main>
	{#if data?.authenticated}
		<p>Upload a file</p>
		<form action="/api/dashboard" method="post">
			<input type="file" name="file" />
			<button type="submit">Upload</button>
		</form>
	{:else}
		<h2 class="h2">You are not authenticated</h2>

		<p>
			Please <a class="link" href="/signin">sign in</a> to access the dashboard.
		</p>
	{/if}
	<form action="?/logout" method="post">
		<button class="btn logout">Log Out</button>
	</form>
</main>

<Footer />

<style>
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
</style>
