<script lang="ts" context="module">
	export interface TabItem {
		name: string;
		href: string;
	}
</script>

<script lang="ts">
	import MainContent from './MainContent.svelte';

	export let data;
	export let tabObjects: TabItem[];
	export let currentTabIndex: number = 0;
	$: currentTabIndex && console.log(currentTabIndex);
</script>

<div class="flex flex-row flex-wrap border-b-2 ml-8">
	{#each tabObjects as tab, index}
		<div class="sm:hidden">
			<label for="tabs" class="sr-only">Select a tab</label>
			<select
				id={tab.name}
				name={tab.name}
				class="block w-full pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
			>
				<option id={tab.name} selected={index == currentTabIndex}>{tab.name}</option>
			</select>
		</div>
		<div class="hidden sm:block">
			<div class=" border-gray-200">
				<nav class="-mb-px flex space-x-8" aria-label="Tabs">
					<a
						on:click={() => (currentTabIndex = index)}
						id={tab.name}
						href={tab.href}
						class="{index === currentTabIndex
							? 'border-indigo-500 text-indigo-600 active:text-indigo-600'
							: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}, whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm]"
						aria-current={index === currentTabIndex ? 'page' : undefined}
					>
						{tab.name}
					</a>
				</nav>
			</div>
		</div>
	{/each}
</div>

<MainContent {currentTabIndex} {data} />
