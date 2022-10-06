<script>
	// Made by Kevin Åberg Kultalahti
	// Twitter: @kevmodrome
	// Don't miss Svelte Summit: https://sveltesummit.com
	
	let url = "https://www.swapi.tech/api/people/1"
	
	import fetchStore from './fetch.js'
	const [data, loading, error, get] = fetchStore(url)
</script>

<button on:click={get}>
	Fetch again
</button>

{#if $loading}
	Loading: {$loading}
{:else if $error}
	Error: {$error}
{:else}
	<pre>{JSON.stringify($data, null, 2)}</pre>
{/if}