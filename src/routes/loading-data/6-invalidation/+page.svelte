<svelte:head>
	<title>Loading Data - Invalidation</title>
	<meta name="description" content="Loading Data Invalidation how to use" />
</svelte:head>

<div>
	<h3>Invalidation</h3>

	<div>
		Invalidationpermalink
		SvelteKit tracks the dependencies of each load function to avoid re-running it unnecessarily during navigation. For example, a load function in a root +layout.js doesn't need to re-run when you navigate from one page to another unless it references url or a member of params that changed since the last navigation.

		A load function will re-run in the following situations:

		It references a property of params whose value has changed
		It references a property of url (such as url.pathname or url.search) whose value has changed
		It calls await parent() and a parent load function re-ran
		It declared a dependency on a specific URL via fetch or depends, and that URL was marked invalid with invalidate(url)
		All active load functions were forcibly re-run with invalidateAll()
		
		If a load function is triggered to re-run, the page will not remount — instead, it will update with the new data. This means that components' internal state is preserved. If this isn't want you want, you can reset whatever you need to reset inside an afterNavigate callback, and/or wrap your component in a `{`#key ...`}` block.
	</div>
</div>

<style>
	div {
		white-space: pre-line;
	}
</style>
