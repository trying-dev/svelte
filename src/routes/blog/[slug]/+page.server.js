import { error } from '@sveltejs/kit';

const getPostFromDatabase = (/** @type {string} */ slug) =>
	new Promise((resolve, reject) => {
		resolve({
			id: 0,
			slug,
			title: 'etwas',
			content: 'etwas content'
		});
	});

/** @type {import('.svelte-kit/types/src/routes/blog/[slug]/$types').PageServerLoad} */
export async function load({ params }) {
	const post = await getPostFromDatabase(params.slug);

	if (params.slug === 'etwas') {
		return {
			title: 'Etwas!',
			content: 'Welcome to our blog etwas. Lorem ipsum dolor sit amet...'
		};
	}

	if (post) {
		return post;
	}

	throw error(404, 'Not found');
}
