<script>
	import Menu from '$lib/components/Menu.svelte'
	const list = ['depends', 'fetch', 'parents', 'setHeaders'];
</script>

<div>
	<Menu list={list} />

	<slot />
</div>

<style>
</style>
