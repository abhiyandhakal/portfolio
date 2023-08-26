<script>
	import Footer from "$components/footer.svelte";
	import Nav from "$components/nav.svelte";
</script>

<header>
	<Nav />
</header>

<slot class="slot" />

<Footer />

<style>
	.slot {
		min-height: 50vh;
	}
</style>
