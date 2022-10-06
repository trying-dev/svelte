<script>
	import Menu from '$lib/components/Menu.svelte'
	const list = ['data-1', 'data-2', 'params', 'routeId', 'url'];
</script>

<div class="loading-data">
	<Menu routes={list} />

	<slot />
</div>

<style>
</style>
