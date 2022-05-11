<script lang="ts" context="module">
	export interface ContactProps {
		id: number;
		role: string;
		name: string;
		title: string;
		company: string;
		mail: string;
		telephone: string;
		imgUrl: string;
	}
</script>

<script lang="ts">
	import ContactsMapped from './ContactsMapped.svelte';

	// const contactArray: ContactProps[] = [
	// 	{
	// 		id: 1,
	// 		name: 'Brad Wilshire',
	// 		role: 'admin',
	// 		title: 'CTO',
	// 		company: 'Queenslab',
	// 		mail: 'brad.wilshire@queenslab.se',
	// 		telephone: '0733-451234',
	// 		imgUrl:
	// 			'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80'
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Amanda Wilson',
	// 		role: 'admin',
	// 		title: 'CEO',
	// 		company: 'Polestar AB',
	// 		mail: 'amanda.wilson@polestar.se',
	// 		telephone: '0705-451234',
	// 		imgUrl:
	// 			'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
	// 	}
	// ];

	export let data;
</script>

<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 ml-12">
	{#each data.contactList as item}
		<ContactsMapped {item} />
	{/each}
</ul>
