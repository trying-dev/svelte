import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {

  return  {}  


  // check this case

  // if (!locals.user) {
	// 	throw redirect(307, '/login');
  // }

  // if (!locals.user.isAdmin) {
  //   throw error(403, 'not an admin');
  // }
}