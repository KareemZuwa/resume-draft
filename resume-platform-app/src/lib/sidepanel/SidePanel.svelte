<script lang="ts" context="module">
	export interface DirectoryList extends Record<string, DirectoryItem[]> {}

	export interface DirectoryItem {
		id: number;
		name: string;
		role: string;
		imageUrl: string;
	}
	[];
</script>

<script lang="ts">
	import type { DirectoryPeopleList } from '../../routes/index.svelte';
	import SidePanelSearch from '$lib/sidepanel/SidePanelSearch.svelte';
	import SidePanelDirectory from '$lib/sidepanel/SidePanelDirectory.svelte';
	import persons from '../assets/json/directory.json';

	// const directory: DirectoryList = persons;
	export let directory: DirectoryPeopleList;
</script>

<div>
	<SidePanelSearch />
	<aside>
		<template>
			<nav class="h-screen overflow-y-auto" aria-label="Directory">
				<div class="relative">
					<ul class="relative z-0 divide-y divide-gray-200">
						<SidePanelDirectory {directory} />
					</ul>
				</div>
			</nav>
		</template>
	</aside>
</div>
