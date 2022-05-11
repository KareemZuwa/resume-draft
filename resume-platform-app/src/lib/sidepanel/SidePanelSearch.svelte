<script>
	import SidePanelSearchInput from '$lib/sidepanel/SidePanelSearchInput.svelte';
	let label = 'Search';
	let searchValue = '';
	$: searchValue && console.log(searchValue);
</script>

<div class="bg-[#232A52] p-5 pr-12 pt-2.5">
	<SidePanelSearchInput {label} bind:inputText={searchValue} />
</div>
