<script>
	import Menu from '../Menu.svelte'
	const list = ['data-1', 'data-2', 'params', 'routeId', 'url'];
</script>

<div class="loading-data">
	<Menu list={list} />

	<slot />
</div>

<style>
</style>
