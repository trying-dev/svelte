/** @type {import('./$types').PageServerLoad} */
export function load({ url }) {
	const { href, origin, protocol, username, password, host, hostname, port, pathname, search } =
		url;

	return {
		common_url: {
			href,
			origin,
			protocol,
			username,
			password,
			host,
			hostname,
			port,
			pathname,
			search
		}
	};
}
