<script>
	import { page } from '$app/stores';
	/**
	 * @type {string[]}
	 */
	export let list;

	export let pathname = $page.url.pathname;

	list.forEach((element) => {
		if (pathname.indexOf(element) !== -1)
			pathname = pathname.slice(0, pathname.indexOf(element) - 1);
	});
</script>

<div>
	<h3>Menu:</h3>

	<ul>
		{#each list as item}
			<li class:active={pathname.startsWith(`${item}`)}>
				<a href={`${pathname}/${item}`}>{item}</a>
			</li>
		{/each}
	</ul>

	<slot />
</div>
