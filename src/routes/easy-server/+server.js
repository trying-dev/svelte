import { json } from '@sveltejs/kit';

import {get_folders_names} from '$lib/helpers/get_folders_names'

console.log(get_folders_names('./src/routes'));

import { readFileSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';

const list = readdirSync('./src/routes').filter((route) => route.indexOf('.') === -1);

// console.log(list);

const file = fileURLToPath(new URL('../../../package.json', import.meta.url));
const jsons = readFileSync(file, 'utf8');
const pkg = JSON.parse(jsons);

// console.log(file);
// console.log(jsons);
// console.log(pkg);



/** @type {import('./$types').RequestHandler} */
export function GET(event) {
	// log all headers
	// console.log(...event.request.headers);
	// console.log(event)

	return json({
		// retrieve a specific header
		message: 'easy server'
	});
}
