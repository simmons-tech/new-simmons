<script lang="ts">
	import { page } from '$app/state';
	import { redirect } from '@sveltejs/kit';

	if (page.url.pathname.includes('.php') && page.status === 404) {
		redirect(302, page.url.pathname.replace('.php', ''));
	}
	if (page.url.pathname.includes('.html') && page.status === 404) {
		redirect(302, page.url.pathname.replace('.html', ''));
	}
</script>

<div class="flex h-full w-full flex-col items-center justify-center space-y-2 text-center">
	<h1 class="h1">
		{page.status}: {page.error?.message}
		<span>😔</span>
	</h1>
	{#if page.status === 404}
		<p>Sorry, but the page you were trying to view does not exist.</p>
		<p>It looks like this was the result of either:</p>
		<ul class="ml-6 list-outside list-disc py-2">
			<li>a mistyped address</li>
			<li>an out-of-date link</li>
		</ul>
	{/if}
	<p>
		Please <a class="anchor" href="mailto:simmons-tech@mit.edu">contact the Tech Chairs</a> to
		report this incident, and <a class="anchor" href="/">click here to return to the home page</a>.
	</p>
	<img
		src="https://http.cat/{page.status}.jpg"
		alt="Cat Error {page.status} Picture"
		class="w-96 max-w-full"
	/>
</div>
