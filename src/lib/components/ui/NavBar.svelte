<script lang="ts">
	import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	let isLoggedIn = false;
</script>

<nav class="bg-crust">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex-shrink-0 flex items-center">
				<a href="/">
					<Fa icon={faCircleCheck} class="text-4xl text-blue" />
				</a>
			</div>
			<div class="hidden sm:flex sm:items-center">
				{#if isLoggedIn}
					<a href="/profile"
						 class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Profile</a>
				{:else}
					<a href="/login" class="bg-rosewater text-surface0 px-3 py-2 rounded-md text-sm font-medium">Login</a>
					<a href="/signup"
						 class="ml-4 text-surface0 bg-red px-3 py-2 rounded-md text-sm font-medium">Signup</a>
				{/if}
			</div>
		</div>
	</div>
</nav>