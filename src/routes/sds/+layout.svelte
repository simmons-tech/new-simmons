<script lang="ts">
	let { children } = $props();

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import DBSidebar from '$lib/components/DBSidebar.svelte';
	import DBFooter from '$lib/components/DBFooter.svelte';

	import { page } from '$app/state';

	let innerWidth: number | undefined = $state();
</script>

<svelte:window bind:innerWidth />

<div class="flex h-full w-full flex-col overflow-hidden">
	<header class="z-10 flex-none">
		<Header />
	</header>

	<div class="flex h-full w-full flex-auto overflow-hidden">
		{#if page.data.username && page.data.groups}
			<aside class="hidden w-auto flex-none overflow-x-hidden overflow-y-auto sm:block">
				<DBSidebar username={page.data.username} groups={page.data.groups} />
			</aside>
		{/if}

		<div class="flex flex-1 flex-col overflow-x-hidden" style:scrollbar-gutter="auto">
			<main class="flex-auto">
				<div class="h-full w-full">
					<div class="bg-surface-50-900 rounded-container h-full w-full">
						{@render children()}
					</div>
				</div>
			</main>
		</div>
	</div>

	<footer class="flex-none">
		{#if page.data.username && page.data.groups}
			<aside class="block sm:hidden">
				<DBFooter username={page.data.username} groups={page.data.groups} />
			</aside>
		{/if}
		<Footer />
	</footer>
</div>
