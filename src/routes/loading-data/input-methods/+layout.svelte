<script>
	import Menu from '../Menu.svelte'
	const list = [];
</script>

<div>
	<Menu list={list} />

	<slot />
</div>

<style>
</style>
