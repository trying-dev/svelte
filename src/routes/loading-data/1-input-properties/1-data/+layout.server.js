import { get_folders_names } from '$lib/helpers/get_folders_names';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	return {
		routes: get_folders_names('./src/routes/loading-data')
	};
}
