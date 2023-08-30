<script>
	import Footer from "$components/footer.svelte";
	import Nav from "$components/nav.svelte";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	inject({ mode: dev ? "development" : "production" });
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
