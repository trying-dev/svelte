<script>
	import { page } from '$app/stores';
	const list = ['first', 'second', 'third/fourht', 'etwas/anderes/auch']
</script>

<div class="loading-data">
	<h3>Menu:</h3>

	<ul>
		{#each list as item}
			<li class:active={$page.url.pathname.startsWith(`${item}`)}>
				<a href={`/loading-data/params/${item}`}>{item}</a>
			</li>
		{/each}
	</ul>

	<slot />
</div>

<style>
</style>
