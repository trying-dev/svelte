<script>
	import { page } from '$app/stores';
</script>

<div>
	<h3>Parents</h3>
	<li class:active={$page.url.pathname.startsWith('/children')}>
		<a href="/children">children</a>
	</li>
</div>

<style>
	div {
		text-align: center;
	}
</style>
