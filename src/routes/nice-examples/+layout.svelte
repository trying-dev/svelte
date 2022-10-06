<script>
	import Menu from '$lib/components/Menu.svelte';
	// const list = ['input-properties', 'input-methods', 'output', 'errors', 'invalidation', 'shared-state'];

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div>
	<h3>Loading data</h3>

	<Menu list={data.routes} />

	<slot />
</div>
