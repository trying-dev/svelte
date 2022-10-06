// @filename: $type../../../../../../.svelte-kit/types/src/routes/loading-data/2-input-methods/parents/children/$types
export type PageServerLoad = import('@sveltejs/kit').Load<{}, null, { a: number, b: number }>;

// @filename: index.js
// ---cut---
/** @type {import('./$types').PageServerLoad} */
export async function load({ parent, fetch }: any) {
  // const data = await fetch('./some-api');
	const parentData = await parent();

  console.log(parentData)

  return {
    // ...data,
    meta: { ...parentData.meta, 
      // ...data.meta
     }
  };
}