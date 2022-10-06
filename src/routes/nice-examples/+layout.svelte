<script>
	import Menu from '$lib/components/Menu.svelte';
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div>
	<h3>Nice examples</h3>

	<Menu routes={data.routes} />

	<slot />
</div>
