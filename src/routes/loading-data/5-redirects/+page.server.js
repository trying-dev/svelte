import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load({ locals }) {
  if (!locals.user) {
		throw redirect(307, '/');
  }

  if (!locals.user.isAdmin) {
    throw error(403, 'not an admin');
  }
}