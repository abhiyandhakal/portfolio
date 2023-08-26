<script lang="ts">
	export let type: "error" | "success" | "warning";

	function getColor(type: string): string {
		let color;
		switch (type) {
			case "error":
				color = "var(--color-red, red)";
				break;
			case "success":
				color = "var(--color-green, green)";
				break;
			case "warning":
				color = "var(--color-yellow, yellow)";
				break;
			default:
				color = "var(--bg-primary, blue)";
		}

		return color;
	}

	function clickHandler(e: MouseEvent | KeyboardEvent) {
		document.removeChild(e.target as Node);
	}
</script>

<span
	class="alert"
	style={`background: ${getColor(type)}`}
	on:click={clickHandler}
	on:keyup={clickHandler}
	on:keydown={clickHandler}
>
	<slot />
</span>

<style lang="scss">
	.alert {
		position: fixed;
		bottom: var(--gap-lg);
		left: var(--gap-lg);
		color: var(--text-dark);
		padding: var(--gap-small) var(--gap-lg);
		border-radius: var(--radius-1);
		z-index: 1000;
	}
</style>
