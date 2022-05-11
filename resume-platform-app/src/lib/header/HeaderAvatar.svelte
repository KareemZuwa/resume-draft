<script lang="ts">
	export let data;
</script>

<div class="flex">
	<img
		class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 object-cover"
		src={data.imageUrl}
		alt=""
	/>
</div>
