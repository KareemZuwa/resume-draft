<script lang="ts">
	let heading: string = 'Master in computer Science';
	let description: string =
		'Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.';

	export let data;
</script>

<div class="pb-5 border-b border-gray-200">
	<h3 class="text-lg leading-6 font-medium text-gray-900">{data.education}</h3>
	<p class="mt-1 max-w-2xl text-sm text-gray-500">{data.eduDesc}</p>
</div>
