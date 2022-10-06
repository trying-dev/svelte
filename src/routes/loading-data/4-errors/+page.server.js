import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export function load({ locals }) {
  // throw error(401, 'Nice');

  if (!locals.user) {
    throw error(401, 'not logged in');
  }
 
  if (!locals.user.isAdmin) {
    throw error(403, 'not an admin');
  }
}