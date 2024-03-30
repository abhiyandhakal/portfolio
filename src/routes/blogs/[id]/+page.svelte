<script>
	export let data;
</script>

<header>
	<h1 class="h1">{data.metadata.title}</h1>
</header>

<main id="content">
	<p class="subtitle">Posted on {new Date(data.metadata.date).toDateString()}</p>
	<div class="blog">{@html data.content}</div>
</main>

<style lang="scss">
	header,
	main {
		max-width: calc(var(--max-width) / 1.5);
		margin-inline: auto;
		font-size: var(--fz-lg);
	}

	main {
		padding: var(--gap-1);
		line-height: 1.7;
	}
</style>
