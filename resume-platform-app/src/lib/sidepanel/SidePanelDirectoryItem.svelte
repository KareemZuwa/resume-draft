<script lang="ts">
	import type { DirectoryItem } from '$lib/sidepanel/SidePanel.svelte';
	import { user } from '../../stores';
	export let item: DirectoryItem;

	const mainPageContent = (item) => {
		console.log(item.name, 'got clicked');
		$user = item;
		console.log($user);
	};
</script>

<li class="bg-white">
	<div
		class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
	>
		<div class="flex-shrink-0">
			<img class="h-10 w-10 rounded-full object-cover" src={item.imageUrl} alt="" />
		</div>
		<div class="flex-1 min-w-0">
			<a sveltekit:prefetch href={`/${item.name}`} class="focus:outline-none">
				<span class="absolute inset-0" aria-hidden="true" />
				<p class="text-sm font-medium text-gray-900">
					{item.name}
				</p>
				<p class="text-sm text-gray-500 truncate">
					{item.role}
				</p>
			</a>
		</div>
	</div>
</li>
