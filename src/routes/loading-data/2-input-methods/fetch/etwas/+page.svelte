<script>
   import { onMount } from "svelte";
   const endpoint = "https://jsonplaceholder.typicode.com/posts";
   let posts = [];
 
   onMount(async function () {
     const response = await fetch(endpoint);
     const data = await response.json();
     console.log(data);
   });
 
   export let name = '';
 </script>
 
 <main>
   <h1>Hello {name}!</h1>
   <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
 </main>
 
 <style>
   /* ommitted for brevity */
 </style>