<script lang="ts">
	export let mainSectionTitle: string;
	export let mainSectionMeetName: string;
</script>

<div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
	<div>
		<h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
			{mainSectionTitle}
		</h2>
		<h3
			class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl"
		>
			{mainSectionMeetName}
		</h3>
	</div>
</div>
