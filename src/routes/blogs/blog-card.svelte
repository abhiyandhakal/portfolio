<script lang="ts">
	import type { Blog } from "$types";

	export let blog: Blog;
</script>

<div class="card">
	<h2 class="h3"><a href={`/blogs/${blog.id}`}>{blog.metadata.title}</a></h2>
	<p class="subtitle">Posted on {new Date(blog.metadata.date).toDateString()}</p>

	<p class="description">{@html blog.metadata.description}</p>
</div>

<style lang="scss">
	.card {
		background: var(--bg-header-footer);
		padding: var(--gap-lg);
		border-radius: var(--radius-1);
		box-shadow: var(--shadow-3);

		.h3 {
			&:hover {
				color: var(--text-link);
			}
			a {
				color: unset;
				text-decoration: none;
			}
		}

		.description {
			padding-block: var(--gap-small);
			font-size: var(--fz-lg);
		}
	}
</style>
