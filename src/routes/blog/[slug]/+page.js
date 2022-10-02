import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {

  if (params.slug === 'hello-world') {
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
  }

  if (params.slug === 'etwas') {
    return {
      title: 'Etwas!',
      content: 'Welcome to our blog etwas. Lorem ipsum dolor sit amet...'
    };
  }
 
  throw error(404, 'Not found');
  
}

export const prerender = 'auto'

export const ssr = true

export const csr = true