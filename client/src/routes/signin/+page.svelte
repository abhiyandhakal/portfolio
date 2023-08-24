<script lang="ts">
	export let form: import("./$types").ActionData;

	import "$styles/style.scss";
	import Nav from "$components/nav.svelte";
	import Footer from "$components/footer.svelte";
	import Alert from "$components/alert.svelte";
	import { redirect } from "@sveltejs/kit";

	if (form?.error) {
		setTimeout(() => {
			if (form?.error) {
				form.error = "";
			}
		}, 5000);
	}

	if (form?.message) {
		redirect(303, "/dashboard");
	}

	let showPass = false;
</script>

<header>
	<Nav />
	<h1 class="h1">Sign In</h1>
</header>

<main class="container" id="content">
	{#if form?.error}
		<Alert type="error">{form.error}</Alert>
	{/if}

	<form method="POST">
		<div class="form-group">
			<label for="username">Username</label>
			<input type="text" class="textbox" name="username" value="admin" id="username" required />
		</div>

		<div class="form-group">
			<label for="password">Password</label>
			<input
				type={showPass ? "text" : "password"}
				class="textbox"
				name="password"
				id="password"
				required
			/>
			<button class="show-hide" type="button" on:click={() => (showPass = !showPass)}>
				<iconify-icon
					icon={!showPass ? "formkit:hidden" : "mdi:show-outline"}
					style="color: var(--text-primary)"
				/>
			</button>
		</div>

		<button class="btn" type="submit">Sign In</button>
	</form>
</main>

<Footer />

<style lang="scss">
	.container {
		min-height: 50vh;
		padding: var(--gap-1);
	}

	h1 {
		margin-top: var(--gap-1);
	}

	form {
		max-width: 500px;
		margin-inline: auto;
		font-size: var(--fz-2xl);
		display: grid;
		gap: var(--gap-lg);

		.form-group {
			display: grid;
			grid-template-columns: auto 1fr;
			gap: var(--gap-lg);
			position: relative;

			.show-hide {
				position: absolute;
				right: 0;
				background: none;
				border: none;
				display: grid;
				place-items: center;
				height: 100%;
				padding-inline: var(--gap-small);
				cursor: pointer;

				&:hover {
					background: var(--bg-secondary);
				}
			}
		}

		input {
			padding: var(--gap-small) var(--gap-lg);
		}

		.btn {
			max-width: fit-content;
			margin-inline: auto;
		}
	}
</style>
