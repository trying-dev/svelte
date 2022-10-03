<script>
	/** @type {import('./$types').PageData} */
	export let data;

	// here try to show data.a but it is never defined
	// console.log(data.a); // `undefined`, it wasn't passed through in +page.js
	// console.log(data.b); // `2`
</script>

<div>
	<h1>Loading Data</h1>
	<h3>Here it will use the information related on the page server and page js</h3>
	<p>
		but because server just run on server and js run on browser then the passed information from js
		will be what will be available to show
	</p>
</div>

<style>
	div {
		text-align: center;
	}
</style>
