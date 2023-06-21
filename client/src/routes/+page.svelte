<script lang="ts">
	import Nav from "../components/nav.svelte";
	import Footer from "../components/footer.svelte";
</script>

<header>
	<Nav />
</header>

<main>
	<div class="intro">
		Hi, I'm Abhiyan
		<div>Dhakal</div>
	</div>

	<img src="/abhiyan.webp" alt="Abhiyan" />
</main>

<Footer />

<style lang="scss">
	main {
		display: flex;
		justify-content: space-between;

		height: calc(100vh - var(--nav-height));
		max-width: var(--max-width);
		margin: 0 auto;
		padding: var(--gap-1);
		padding-block-end: 0;

		@media (max-width: 50rem) {
			flex-direction: column;

			img {
				height: 75%;
			}
		}
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
