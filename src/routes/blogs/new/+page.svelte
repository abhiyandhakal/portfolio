<script lang="ts">
	import type { ActionData, PageServerData } from "./$types";
	import Alert from "$components/alert.svelte";

	export let form: ActionData;

	let isSignedIn: boolean = false;

	export let data: PageServerData | { authenticated: boolean };

	if (form?.message) {
		isSignedIn = true;
	}

	setTimeout(() => {
		if (form?.error) {
			form.error = "";
		} else if (form?.message) {
			form.message = "";
		}
	}, 5000);

	let showPass = false;
</script>

{#if !data?.authenticated}
	<header>
		<h1 class="h1">Sign In</h1>
	</header>

	<main class="container" id="content">
		{#if form?.error}
			<Alert type="error">{form.error}</Alert>
		{:else if form?.message}
			<Alert type="success">{form.message}</Alert>
		{/if}

		<form method="POST">
			<div class="form-group">
				<label for="username">Username</label>
				<input type="text" class="textbox" name="username" id="username" required />
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
{/if}

<main id="content">
	<!--  -->
</main>

<style lang="scss">
	main {
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
