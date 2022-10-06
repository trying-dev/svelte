// @ts-nocheck
// import * as api from '$lib/api';
 
/** @type {import('./$types').PageLoad} */
export async function load({ depends }) {

  return {
    message: 'depends'
  }

  depends(
    `${api.base}/foo`,
    `${api.base}/bar`,
    'my-stuff:foo'
  );
 
  return {
    foo: api.client.get('/foo'),
    bar: api.client.get('/bar')
  };
}