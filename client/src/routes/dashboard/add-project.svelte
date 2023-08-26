<script lang="ts">
</script>

<form action="?/upload">
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
	<input class="textbox" required type="file" name="image" placeholder="Project image" />
	<button class="btn">Add project</button>
</form>

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
