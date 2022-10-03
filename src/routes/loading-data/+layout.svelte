<script>
	import { page } from '$app/stores';
</script>

<div class="loading-data">
	<h3>Menu:</h3>
	<ul>
		<li class:active={$page.url.pathname.startsWith('/first-part')}>
			<a href="/loading-data/first-part">first-part</a>
		</li>

		<li class:active={$page.url.pathname.startsWith('/second-part')}>
			<a href="/loading-data/second-part">second-part</a>
		</li>

		<li class:active={$page.url.pathname.startsWith('/third-part')}>
			<a href="/loading-data/third-part">third-part</a>
		</li>

		<li class:active={$page.url.pathname.startsWith('/fourth-part')}>
			<a href="/loading-data/fourth-part">fourth-part</a>
		</li>

		<li class:active={$page.url.pathname.startsWith('/fiveth-part')}>
			<a href="/loading-data/fiveth-part">fiveth-part</a>
		</li>

		<li class:active={$page.url.pathname.startsWith('/sixth-part')}>
			<a href="/loading-data/sixth-part">sixth-part</a>
		</li>

		<li class:active={$page.url.pathname.startsWith('/seven-part')}>
			<a href="/loading-data/seven-part">seven-part</a>
		</li>

		<li class:active={$page.url.pathname.startsWith('/sext-part')}>
			<a href="/loading-data/sext-part">sext-part</a>
		</li>

		<li class:active={$page.url.pathname.startsWith('/nine-part')}>
			<a href="/loading-data/nine-part">nine-part</a>
		</li>
	</ul>

	<slot />
</div>

<style>
</style>
