<script>
	import { count } from '../stores/count';

	function decrement() {
		count.update((n) => n - 1);
	}
</script>

<button on:click={decrement}> - </button>
