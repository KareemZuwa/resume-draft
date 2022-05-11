<script lang="ts">
	import type DirectoryPeopleList from '$lib/sidepanel/SidePanel.svelte';
	import CommandPallette from '$lib/main/pallette/CommandPallette.svelte';
	import Header from '$lib/header/Header.svelte';
	import Main from '$lib/main/Main.svelte';
	export let data: DirectoryPeopleList[];
</script>

<Header {data} />
<Main {data} />
<!-- <CommandPallette /> -->
