<script lang="ts">
	export let data;
	console.log(Object.values(data.presentationList));
</script>

<div class="mt-8 lg:mt-0 mr-24 mb-28">
	<div class="text-base max-w-prose mx-auto lg:max-w-none">
		<div
			class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"
		>
			<p class="whitespace-pre-line">
				{data.presentation}
			</p>
		</div>
		<div
			class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"
		>
			<ul class="list-disc pl-4 whitespace-pre-line">
				{#each Object.entries(data.presentationList) as [index, paragraph]}
					<li class="mb-5">{paragraph}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
