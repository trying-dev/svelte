import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {

  return {}
  // check this case
  // if (!locals.user) {
  //   throw error(401, 'not logged in');
  // }
 
  // if (!locals.user.isAdmin) {
  //   throw error(403, 'not an admin');
  // }
}