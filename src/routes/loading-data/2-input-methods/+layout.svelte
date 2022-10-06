<script>
	import Menu from '$lib/components/Menu.svelte'
	const list = ['depends', 'fetch', 'parents', 'setHeaders'];
</script>

<div>
	<Menu routes={list} />

	<slot />
</div>

<style>
</style>
