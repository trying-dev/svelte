<script>
	import Menu from '../../Menu.svelte'
	const list = ['first', 'second', 'third/fourht', 'etwas/anderes/auch']
</script>

<div>
	<Menu list={list} />
	<slot />
</div>

<style>
</style>
