/** @type {import('./$types').PageServerLoad} */
export function load(load_props) {

	// console.log('load_props : ', load_props)

	return {

		params: load_props.params,
		
		message: 'checking props.'
		
	}
}
