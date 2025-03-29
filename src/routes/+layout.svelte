<script>
	import '../app.css';
	import { page } from '$app/stores'

	let { children } = $props();
</script>
<nav>
</nav>
<main>
	{@render children()}
</main>
