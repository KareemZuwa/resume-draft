<script lang="ts">
	import MailLogo from '$lib/assets/MailLogo.svelte';
	import Phonelogo from '$lib/assets/Phonelogo.svelte';
	import type { ContactProps } from '$lib/main/contact/Contact.svelte';
	export let item: ContactProps;

	console.log(item.company);
</script>

<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
	<div class="w-full flex items-center justify-between p-6 space-x-6">
		<div class="flex-1 truncate">
			<div class="flex items-center space-x-3">
				<h3 class="text-gray-900 text-sm font-medium truncate">{item.name}</h3>
				<span
					class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
					>{item.role}</span
				>
			</div>
			<p class="mt-1 text-gray-500 text-sm truncate">{item.title}</p>
		</div>
		<img
			class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0 object-cover"
			src={item.imgUrl}
			alt=""
		/>
	</div>
	<div>
		<div class="-mt-px flex divide-x divide-gray-200">
			<div class="w-0 flex-1 flex">
				<a
					href={item.mail}
					class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
				>
					<MailLogo />
					<span class="ml-3">Email</span>
				</a>
			</div>
			<div class="-ml-px w-0 flex-1 flex">
				<a
					href={item.telephone}
					class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
				>
					<Phonelogo />
					<span class="ml-3">Call</span>
				</a>
			</div>
		</div>
	</div>
</li>
