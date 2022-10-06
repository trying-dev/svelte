<script>
	export let header = false;

	import { page } from '$app/stores';
	
	/**
	 * @type {string[]}
	 */
	export let routes;

	export let pathname = $page.url.pathname;
	pathname = pathname.length === 1 ? '' : pathname;
	export let routeId = $page.routeId;

	routes.forEach((element) => {
		if (pathname.indexOf(element) !== -1)
			pathname = pathname.slice(0, pathname.indexOf(element) - 1);
	});
</script>

<div class:header>
	{#if !header}
		<h3>Menu:</h3>
	{/if}

	<ul>
		{#each routes as last_route}
			<li class:active={pathname.startsWith(`${last_route}`)}>
				<a href={`${pathname}/${last_route}`}>{last_route}</a>
			</li>
		{/each}
	</ul>

	<slot />
</div>

<style>
	.header ul {
		position: relative;
		padding: 1rem;
		margin: 0;

		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;

		max-width: 50vw;
		flex-wrap: wrap;

		row-gap: 1rem;
		column-gap: 1.5rem;
	}

	.header li {
		position: relative;
		height: 100%;
	}

	.header li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	.header nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	.header a:hover {
		color: var(--color-theme-1);
	}
</style>
