 
/** @type {import('./$types').PageLoad} */
export async function load({ depends }) {
  depends(
    'my-stuff:foo'
  );
 
  return {
   depends
  };
}