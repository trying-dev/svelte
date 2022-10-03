<script>
	/** @type {import('./$types').PageData} */
   export let data
	export let { routeId } = data;
</script>

<div>
	<h1>Loading Data</h1>

	<h3>routeId</h3>

	<p>The name of the current route directory, relative to src/routes:</p>

	<h4>{routeId}</h4>
</div>

<style>
	div {
		text-align: center;
	}
</style>
