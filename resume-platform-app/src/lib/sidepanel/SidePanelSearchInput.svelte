<script lang="ts">
	export let label: string;
	export let inputText: string;
</script>

<template>
	<div>
		<label for="search" class="block text-sm font-medium text-white">{label}</label>
		<div class="mt-1 relative flex items-center">
			<input
				type="text"
				name="search"
				bind:value={inputText}
				class="shadow-sm pl-2 focus:ring-indigo-500 focus:border-indigo-500 block h-10 w-full pr-12 sm:text-sm border-gray-300 rounded-md"
			/>
			<div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
				<kbd
					class="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400"
				>
					⌘K
				</kbd>
			</div>
		</div>
	</div>
</template>
