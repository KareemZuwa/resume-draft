<script lang="ts">
	import MailLogo from '$lib/assets/MailLogo.svelte';
	import HeaderInsetLabels from './HeaderInsetLabels.svelte';

	let buttonText: string = 'Download PDF';
</script>

<div class="flex-col">
	<button
		type="button"
		class="inline-flex justify-center px-4 py-2 border items-stretch border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
		on:click={() => console.log('open in english or swedish')}
	>
		<MailLogo />
		<span class="pl-2.5">{buttonText}</span>
	</button>
	<!-- <HeaderInsetLabels /> -->
</div>
