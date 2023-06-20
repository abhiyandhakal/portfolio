<script lang="ts">
	import Nav from "../components/nav.svelte";
</script>

<header>
	<Nav />

	<div class="container">
		<div class="intro">
			Hi, I'm Abhiyan
			<div>Dhakal</div>
		</div>

		<img src="/abhiyan.png" alt="Abhiyan" />
	</div>
</header>

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-between;

		height: calc(100vh - var(--nav-height));
		max-width: var(--max-width);
		margin: 0 auto;
		padding: var(--gap-1);
		padding-block-end: 0;
	}

	img {
		display: block;
		object-fit: contain;
		object-position: bottom;
	}

	.intro {
		font-size: 3rem;
	}
</style>
