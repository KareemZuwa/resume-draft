<script lang="ts">
	import { user } from '../../stores';
	import MainTabs from './MainTabs.svelte';
	import type { TabItem } from '$lib/main/MainTabs.svelte';

	export let data;

	const tabs: TabItem[] = [
		{ name: 'Presentation', href: '' },
		{ name: 'Experience', href: '' },
		{ name: 'Education', href: '' },
		{ name: 'Contact', href: '' }
	];
</script>

<div class="pt-6 ml-3 mr-3.5 bg-white">
	<MainTabs tabObjects={tabs} {data} />
</div>
