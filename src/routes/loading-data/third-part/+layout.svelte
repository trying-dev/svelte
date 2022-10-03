<script>
	import { page } from '$app/stores';
</script>

<div class="loading-data">
	<h3>Menu:</h3>
	<ul>
		
		<li class:active={$page.url.pathname.startsWith('/third-part/first')}>
			<a href="/loading-data/third-part/first">first</a>
		</li>

		<li class:active={$page.url.pathname.startsWith('/third-part/second/third/fourth/fifth')}>
			<a href="/loading-data/third-part/second/third/fourth/fifth">second/third/fourth/fifth</a>
		</li>

	</ul>

	<slot />
</div>

<style>
</style>
