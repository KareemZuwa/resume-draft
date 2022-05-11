<script lang="ts">
	import Presentation from '$lib/main/presentation/Presentation.svelte';
	import Education from './education/Education.svelte';
	import Experience from './experience/Experience.svelte';
	import Contact from './contact/Contact.svelte';

	export let data;
	export let currentTabIndex: number;
	$: currentTabIndex && console.log(currentTabIndex);
</script>

{#if currentTabIndex === 0}
	<Presentation {data} />
{:else if currentTabIndex === 1}
	<Experience {data} />
{:else if currentTabIndex === 2}
	<Education {data} />
{:else if currentTabIndex === 3}
	<Contact {data} />
{/if}
