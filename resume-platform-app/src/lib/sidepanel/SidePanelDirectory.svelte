<script lang="ts">
	import type { DirectoryPeopleList } from '../../routes/index.svelte';
	import type { DirectoryList } from '$lib/sidepanel/SidePanel.svelte';
	import SidePanelDirectoryItem from './SidePanelDirectoryItem.svelte';
	import SidePanelLetter from './SidePanelLetter.svelte';
import Contact from '$lib/main/contact/Contact.svelte';

	export let directory: DirectoryPeopleList;

</script>

{#each Object.keys(directory) as letter}
	<SidePanelLetter {letter} />
	{#each directory[letter] as item}
		<SidePanelDirectoryItem {item} />
	{/each}
{/each}
