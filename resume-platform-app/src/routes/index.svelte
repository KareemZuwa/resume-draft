<script lang="ts" context="module">
	export interface DirectoryPeopleList extends Record<string, DirectoryPeopleItem[]> {}

	export interface DirectoryPeopleItem {
		id: number;
		name: string;
		role: string;
		imageUrl: string;
		currentjob: string;
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
	// import Header from '$lib/header/Header.svelte';
	// import Main from '$lib/main/Main.svelte';
	import people from '$lib/assets/json/people.json';
	import MainPage from './MainPage.svelte';

	let directory: DirectoryPeopleList = people;
</script>

<wrapper class="grid grid-cols-11 gap-0 max-w-[1440px] m-auto bg-white h-full">
	<div class=" col-span-3">
		<SidePanel {directory} />
	</div>
	<div class=" col-span-8">
		<!-- <Header />
		<Main /> -->
		<!-- <MainPage /> -->
	</div>
</wrapper>
