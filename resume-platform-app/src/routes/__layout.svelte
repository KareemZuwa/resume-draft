<script lang="ts" context="module">
	export const load = async ({ fetch }) => {
		const response = await fetch(`/layout.json`);
		const data = await response.json();
		console.log(data);
		return {
			props: {
				directory: data
			}
		};
	};
	export interface DirectoryPeopleList extends Record<string, DirectoryPeopleItem[]> {}

	export interface DirectoryPeopleItem {
		id: number;
		name: string;
		role: string;
		imageUrl: string;
		currentjob: string;
		presentation: string;
		presentationList: string;
		cjdescription: string;
		experience: string;
		workplace: string;
		yearsactive: string;
		experiencetext: string;
		education: string;
		eduDesc: string;
		eduTitle: string;
		school: string;
		eduYears: string;
		schoolContent: string;
		contactName: string;
		contactRole: string;
		contactTitle: string;
		contactUrl: string;
		contactMail: string;
		contactPhone: string;
	}
	[];
</script>

<script lang="ts">
	import SidePanel from '$lib/sidepanel/SidePanel.svelte';

	import '../app.css';
	import MainPage from './MainPage.svelte';
	export let directory: DirectoryPeopleList;
</script>

<main class="grid grid-cols-11 gap-0 max-w-[1440px] m-auto bg-white h-full">
	<div class=" col-span-3">
		<SidePanel {directory} />
	</div>
	<div class=" col-span-8">
		<!-- <Header />
		<Main /> -->
		<slot />
	</div>
</main>
