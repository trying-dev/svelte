<script>
	import Menu from '$lib/components/Menu.svelte'
	const list = ['input-properties', 'input-methods', 'output', 'errors', 'invalidation', 'shared-state'];
</script>

<div>
	<h3>Loading data</h3>

	<Menu list={list} />

	<slot />
</div>
