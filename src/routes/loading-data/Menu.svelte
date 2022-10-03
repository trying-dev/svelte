<script>
	import { page } from '$app/stores';
	/**
	 * @type {string[]}
	 */
	export let list;

	export const pathname = $page.url.pathname;
	export const make_pathname = (/** @type {string} */ item) =>
		$page.url.pathname.indexOf(item) !== -1 ? pathname.replace(item, '') : pathname;

	export const lern = false;
</script>

<div>
	<h3>Menu:</h3>

	<ul>
		{#each list as item}

			<li class:active={make_pathname(item).startsWith(`${item}`)}>
				<a href={`${make_pathname(item)}/${item}`}>{item}</a>
			</li>

			{#if lern}
				{pathname}.indexOf({item}) = {pathname.indexOf(item)}
				<br />
				<br />

				{pathname}.indexOf({item}) !== -1 = {pathname.indexOf(item) !== -1}
				<br />
				<br />

				{#if pathname.indexOf(item) !== -1}
					if ({pathname} .indexOf ({item}) == -1 then)
					<br />
					<br />

					{pathname.split('/')} .pop() = {pathname.split('/').pop()}
					<br />
					<br />

					{pathname} . replace ({item}, '') = {pathname.replace(item, '')}
					<br />
					<br />
				{/if}
			{/if}
			
		{/each}
	</ul>

	<slot />
</div>
