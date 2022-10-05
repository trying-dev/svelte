/** @type {import('./$types').LayoutServerLoad} */
export async function load({ parent }) {
  const { a } = await parent();
  console.log(a); // `1`
 
  return { b: 2 };
}