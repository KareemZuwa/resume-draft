<script lang="ts">
	import CurrentExperience from './CurrentExperience.svelte';
	import ExperienceFeeds from './ExperienceFeeds.svelte';

	export let data;
</script>

<div class="mt-10 ml-12 pb-16">
	<CurrentExperience {data} />
	<ExperienceFeeds {data} />
</div>
