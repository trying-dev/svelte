<script>
	import Menu from './Menu.svelte'
	const list = ['input-properties', 'input-methods', 'output', 'errors', 'invalidation', 'shared-state'];
</script>

<div class="loading-data-layout">
	<Menu list={list} />

	<slot />
</div>

<style>
</style>
