<script>
   /** @type {import('./$types').PageData} */
   export let data;
   
   // here try to show data.a but it is never defined
   // console.log(data.a); // `undefined`, it wasn't passed through in +page.js
   console.log(data.b); // `2`
 </script>

<div>
   <h1>
      Loading Data
   </h1>
</div>

<style>
   div {
      text-align: center;
   }
</style>