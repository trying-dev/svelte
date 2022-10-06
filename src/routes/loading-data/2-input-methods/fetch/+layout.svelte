<script>
	import Menu from '$lib/components/Menu.svelte'
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div>
	<Menu routes={data.routes} />

	<slot />
</div>

<style>
</style>
