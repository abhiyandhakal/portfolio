<script lang="ts">
	import BlogCard from "./blog-card.svelte";

	export let data;
	let blogs = data.blogs;
</script>

<header>
	<h1 class="h1">Blogs</h1>
</header>

<main id="content">
	{#if blogs.length === 0}
		<p class="h3">No blogs found. Keep tuning in!</p>
	{/if}
	{#each blogs as blog (blog.id)}
		<BlogCard {blog} />
	{/each}
</main>

<style>
	main {
		min-height: 50vh;
		max-width: calc(var(--max-width) / 2);
		margin-inline: auto;
		padding: var(--gap-1);

		display: grid;
		gap: var(--gap-small);
		align-items: start;
		align-content: start;
	}

	.h3 {
		text-align: center;
		color: var(--text-primary);
		padding: var(--gap-xl);
		border: 2px solid var(--text-dim);
	}
</style>
