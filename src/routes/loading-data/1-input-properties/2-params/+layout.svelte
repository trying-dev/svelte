<script>
	import Menu from '$lib/components/Menu.svelte'
	const list = ['first', 'second', 'third/fourht', 'etwas/anderes/auch']
</script>

<div>
	<Menu routes={list} />
	<slot />
</div>

<style>
</style>
