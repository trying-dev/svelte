/** @type {import('./$types').PageLoad} */
export async function load({ fetch, setHeaders }) {
	try {
		const url = `https://cms.example.com/articles.json`;

		const response = await fetch(url);

		setHeaders({
			age: response.headers.get('age') || 'no age',
			'cache-control': response.headers.get('cache-control') || 'no cache control'
		});

		return response.json();
	} catch (error) {
		console.log(error);
	}

	return {
		message: 'setHeaders'
	};
}
