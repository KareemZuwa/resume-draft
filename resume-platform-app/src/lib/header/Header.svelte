<script lang="ts">
	import HeaderPDFButton from './HeaderPDFButton.svelte';
	import HeaderAvatar from './HeaderAvatar.svelte';
	import HeaderHero from './HeaderHero.svelte';
	// import { user } from '../../stores';
	export let data;
</script>

<div>
	<HeaderHero />
	<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
			<HeaderAvatar {data} />
			<div
				class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
			>
				<div class="sm:hidden md:block mt-6 min-w-0 flex-1">
					<h1 class="text-2xl font-bold text-gray-900 truncate">{data.name}</h1>
				</div>
				<div
					class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
				>
					<HeaderPDFButton />
				</div>
			</div>
		</div>
		<div class="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
			<h1 class="text-2xl font-bold text-gray-900 truncate">{data.name}</h1>
		</div>
	</div>
</div>
