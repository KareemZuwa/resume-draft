<script lang="ts">
	import EducationFeeds from './EducationFeeds.svelte';
	import LatestEducation from './LatestEducation.svelte';

	export let data;
</script>

<div class="mt-10 ml-12 pb-16">
	<LatestEducation {data} />
	<EducationFeeds {data} />
</div>
