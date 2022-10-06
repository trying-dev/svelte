<script>
	import { page } from '$app/stores';

	const number_index = $page.url.pathname.indexOf('/children');
	const path_name =
		number_index !== -1 ? $page.url.pathname.slice(0, number_index) : $page.url.pathname;
</script>

<div>
	<h3>Parents</h3>
	<ul>
		<li class:active={path_name.startsWith('/children')}>
			<a href={path_name + '/children'}>children</a>
		</li>
	</ul>

	<slot />
</div>
