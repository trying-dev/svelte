/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
   const { a, b } = await parent();
  //  console.log(a, b); // `1`, `2`
  
   return { c: 3 };
 }