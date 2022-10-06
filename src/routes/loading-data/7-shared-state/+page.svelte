<svelte:head>
	<title>Loading Data - Invalidation</title>
	<meta name="description" content="Loading Data Invalidation how to use" />
</svelte:head>

<div>
	<h3>Shared State</h3>

	<div>
		In many server environments, a single instance of your app will serve multiple users. 
		For that reason, per-request state must not be stored in shared variables outside 
		your load functions, but should instead be stored in event.locals. Similarly, 
		per-user state must not be stored in global variables, 
		but should instead make use of $page.data 
		(which contains the combined data of all load functions) 
		or use Svelte's context feature to create scoped state.
	</div>
</div>

<style>
	div {
		white-space: pre-line;
	}
</style>
