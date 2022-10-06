<script>
	import Menu from '$lib/components/Menu.svelte'
</script>

<div>

	<Menu routes={['etwas', 'cualquiera']} />

	Supuestamente deberia saltar a 404 

	<slot />
</div>