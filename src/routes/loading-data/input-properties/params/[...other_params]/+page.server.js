/** @type {import('./$types').PageServerLoad} */
export function load({params}) {

							// params: { other_params: 'algo/mas/que/no/me/acuerdo' },
	console.log('params : ', params)

	return {

		params,
		
		message: 'checking params, other_params'
		
	}
}
