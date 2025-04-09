<script lang="ts">
	import '../app.css';

	import { page } from '$app/state';
	import { setContext } from 'svelte';
	import { Toaster, createToaster } from '@skeletonlabs/skeleton-svelte';

	const toaster = createToaster();
	setContext('toast', toaster);

	let { children } = $props();
</script>

<svelte:head>
	<title
		>{page.url.pathname.includes('/sds') ? 'Simmons DB' : 'Simmons Hall'}{page.data.title
			? ` | ${page.data.title}`
			: ''}</title
	>
	<meta name="description" content={page.data.description || 'Welcome to the Sponge!'} />
</svelte:head>

<Toaster {toaster}></Toaster>

{@render children()}
