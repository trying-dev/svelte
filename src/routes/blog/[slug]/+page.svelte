<svelte:head>
	<title>Blog Slug</title>
	<meta name="description" content="Blog slug about life" />
</svelte:head>

<script>
   /** @type {import('./$types').PageData} */
   export let data;
 </script>
 
 <h1>{data.title}</h1>
 <div>{@html data.content}</div>