<script>
	import Menu from './Menu.svelte'
	const list = ['input-properties', 'input-methods'];
</script>

<div class="loading-data-layout">
	<Menu list={list} />

	<slot />
</div>

<style>
</style>
