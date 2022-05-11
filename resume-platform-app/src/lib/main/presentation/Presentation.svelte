<script lang="ts">
	import PresentationBadge from '$lib/main/presentation/presentationBadge.svelte';
	import PresentationHeader from '$lib/main/presentation/PresentationHeader.svelte';
	import PresentationText from '$lib/main/presentation/PresentationText.svelte';
	import { user } from '../../../stores';

	export let data;
	let title: string = 'Introduction';
	let meetName: string = `Meet ${data.name}`;
	let badgeText: string = `${data.name}`;
</script>

<template>
	<div class="bg-white overflow-hidden">
		<div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
			<PresentationHeader mainSectionTitle={title} mainSectionMeetName={meetName} />
			<PresentationText {data} />
			<PresentationBadge {badgeText} />
			<PresentationBadge badgeText="Typescript" />
			<PresentationBadge badgeText="CSS" />
		</div>
	</div>
</template>
