<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div>
	<h1>Loading Data</h1>

	<h3>url</h3>

	<p>
		An instance of URL, containing properties like the origin, hostname, pathname and searchParams
		(which contains the parsed query string as a URLSearchParams object). url.hash cannot be
		accessed during load, since it is unavailable on the server.
	</p>
	<!-- 
		{
			"href": "http://localhost:5173/loading-data/url",
			"origin": "http://localhost:5173",
			"protocol": "http:",
			"username": "",
			"password": "",
			"host": "localhost:5173",
			"hostname": "localhost",
			"port": "5173",
			"pathname": "/loading-data/url",
			"search": ""
		}
	 -->
	<h4>{JSON.stringify(data.common_url, null, 4)}</h4>
</div>

<style>
	div {
		text-align: center;
	}

	h4 {
		text-align: left;
		width: fit-content;
		margin: 0 auto;
		white-space: pre;
	}
</style>
