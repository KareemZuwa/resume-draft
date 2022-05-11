<script lang="ts">
	import type { EducationProps } from '$lib/main/education/EducationFeeds.svelte';
	export let item: EducationProps;

	console.log(item.school);
</script>

<li class="last:overflow-hidden">
	<div class="relative pb-8">
		<span
			class="absolute top-5 left-5 -ml-px h-full last:h-3/6 w-0.5 bg-gray-200"
			aria-hidden="true"
		/>
		<div class="relative flex items-start space-x-3">
			<div class="relative">
				<img
					class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white object-cover"
					src={item.imgUrl}
					alt=""
				/>
			</div>
			<div class="min-w-0 flex-1">
				<div>
					<div class="text-sm">
						<a href="activityItem.person.href" class="font-medium text-gray-900">{item.title}</a>
					</div>
					<p class="mt-0.5 text-sm text-gray-500">{item.school}</p>
					<p class="mt-0.5 text-sm text-gray-500">{item.years}</p>
				</div>
				<div class="mt-2 text-sm text-gray-700">
					<p>{item.description}</p>
				</div>
			</div>
		</div>
	</div>
</li>
