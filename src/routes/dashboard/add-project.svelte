<script lang="ts">
	import Alert from "$components/alert.svelte";
	import axios from "axios";

	let error = {
		message: "",
		show: false
	};

	const submitHandler = async (e: Event) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const imageFile = formData.get("thumbnail") as File;
		const arrayBuffer = await imageFile.arrayBuffer();
		const unit8Array = new Uint8Array(arrayBuffer);
		const base64String = unit8Array.reduce((acc, i) => acc + String.fromCharCode(i), "");

		const data = {
			name: formData.get("name"),
			description: formData.get("description"),
			platform: formData.get("platform"),
			repo: formData.get("repo"),
			relatedArticle: formData.get("related-article"),
			thumbnail: {
				name: imageFile.name,
				type: imageFile.type,
				buffer: base64String
			}
		};

		try {
			await axios.post("/api/projects", JSON.stringify(data));
		} catch (err) {
			if (axios.isAxiosError(err)) {
				error = {
					message: err.message || "Something went wrong",
					show: true
				};

				setTimeout(() => {
					error = {
						message: "",
						show: false
					};
				}, 5000);
			}
		}
	};
</script>

<form on:submit={submitHandler}>
	<input class="textbox" required type="text" name="name" placeholder="Project name" />
	<textarea class="textbox" required name="description" placeholder="Project description" />
	<div>
		<select name="platform" class="textbox">
			<option value="github">Github</option>
			<option value="gitlab">Gitlab</option>
		</select>
		<input class="textbox" required type="text" name="repo" placeholder="Project Repository" />
	</div>
	<input type="text" name="related-article" class="textbox" placeholder="Related Article Link" />
	<input
		class="textbox"
		required
		type="file"
		name="thumbnail"
		placeholder="Project image"
		accept="image/*"
	/>
	<button class="btn">Add project</button>
</form>

{#if error.show}
	<Alert type="error">{error.message}</Alert>
{/if}

<style lang="scss">
	form {
		display: grid;
		max-width: 500px;
		margin: var(--gap-lg);
		margin-inline: auto;
		background: var(--bg-secondary);
		padding: var(--gap-lg);
		border-radius: var(--radius-xl);
		gap: var(--gap-lg);

		div {
			display: grid;
			grid-template-columns: auto 1fr;
			gap: var(--gap-lg);
		}
	}

	textarea {
		resize: vertical;
	}
</style>
