<script lang="ts" context="module">
	export interface ExperienceProps {
		id: number;
		title: string;
		company: string;
		years: string;
		description: string;
		imgUrl: string;
	}
</script>

<script lang="ts">
	import ExperienceMappedFeed from './ExperienceMappedFeed.svelte';

	// const experienceArray: ExperienceProps[] = [
	// 	{
	// 		id: 1,
	// 		title: 'Backend Developer',
	// 		company: 'Belid Lightining Group',
	// 		years: '2021 Q1 - Q3',
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.',
	// 		imgUrl:
	// 			'https://media-exp1.licdn.com/dms/image/C4E0BAQGLt75GjEps0Q/company-logo_200_200/0/1610545251036?e=2147483647&v=beta&t=982uJzFL1GUsD7hlY7rAU3eriTcs5qBrAGms_adhKu0'
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Fullstack Developer',
	// 		company: 'Ikea IT Group',
	// 		years: '2020 Q1 - Q3',
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.',
	// 		imgUrl:
	// 			'https://cached-images.bonnier.news/gcs/di-bilder-prod/mly/8f83f29b-53dd-4f8d-a33d-b83b72d3fd95.jpeg?downsize=4096:*'
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Backend Developer',
	// 		company: 'Atea',
	// 		years: '2019 Q1 - Q3',
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.',
	// 		imgUrl: 'https://www.dporganizer.com/wp-content/uploads/2018/05/22100954/Atea-logga2.jpg'
	// 	}
	// ];

	// console.log(experienceArray);

	export let data;
	console.log(data.experienceList[0]);
</script>

<div class="flow-root mt-9 mr-16">
	<ul class="-mb-8">
		{#each data.experienceList as item}
			<ExperienceMappedFeed {item} />
		{/each}
	</ul>
</div>
