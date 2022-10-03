<script>
	import Menu from '../Menu.svelte'
	const list = ['depends', 'fetch', 'parents', 'setHeaders'];
</script>

<div>
	<Menu list={list} />

	<slot />
</div>

<style>
</style>
