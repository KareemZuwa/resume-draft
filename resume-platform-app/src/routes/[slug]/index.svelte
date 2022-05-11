<script lang="ts" context="module">
	export const load = async ({ fetch, params }) => {
		const response = await fetch(`/${params.slug}.json`);
		const data = await response.json();
		console.log(data);
		return {
			props: {
				data
			}
		};
	};
</script>

<script lang="ts">
	import SidePanelDirectory from '$lib/sidepanel/SidePanelDirectory.svelte';

	import MainPage from '../MainPage.svelte';

	export let data;
</script>

<MainPage {data} />
