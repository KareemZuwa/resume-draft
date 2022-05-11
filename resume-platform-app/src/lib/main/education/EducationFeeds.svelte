<script lang="ts" context="module">
	export interface EducationProps {
		id: number;
		title: string;
		school: string;
		years: string;
		description: string;
		imgUrl: string;
	}
</script>

<script lang="ts">
	import EducationMappedFeed from './EducationMappedFeed.svelte';

	// const educationArray: EducationProps[] = [
	// 	{
	// 		id: 1,
	// 		title: 'Bsc Computer Science',
	// 		school: 'Chalmers',
	// 		years: '2021 Q1 - Q3',
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.',
	// 		imgUrl:
	// 			'https://www.chalmers.se/SiteCollectionImages/Logotyper/Chalmers%20logotyp/AvancezChalmersU_black_centered.png'
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Bsc Backend Developer',
	// 		school: 'Yrgo',
	// 		years: '2020 Q1 - Q3',
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.',
	// 		imgUrl: 'https://yrgo.se/uploads/2019/12/yrgo.png'
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Bsc Frontend Engineer',
	// 		school: 'NBI Handelsakademin',
	// 		years: '2019 Q1 - Q3',
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.',
	// 		imgUrl: 'https://www.nbi-handelsakademin.se/wp-content/uploads/Primary_1.png'
	// 	}
	// ];

	// console.log(educationArray);
	export let data;
</script>

<div class="flow-root mt-9 mr-16">
	<ul class="-mb-8">
		{#each data.educationList as item}
			<EducationMappedFeed {item} />
		{/each}
	</ul>
</div>
