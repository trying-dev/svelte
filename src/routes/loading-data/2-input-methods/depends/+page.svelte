<script>
	import { invalidate } from '$app/navigation';
	/** @type {import('./$types').PageData} */
	export let data;
 
	const pageRefresh = async () => {
	  await invalidate('my-stuff:foo');
	}
 </script>
 
 <p>{data.foo}<p>
 <p>{data.bar}</p>
 <button on:click={pageRefresh}>Refresh my stuff</button>