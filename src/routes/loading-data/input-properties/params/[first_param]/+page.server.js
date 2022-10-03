/** @type {import('./$types').PageServerLoad} */
export function load({params}) {


	return {

		params,
		
		message: 'checking params, first_param'
		
	}
}
