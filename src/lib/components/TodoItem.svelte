<script lang="ts">
	import type { Todo } from '$lib/types';

	import Fa from 'svelte-fa';
	import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
	import { faCircleCheck as faCircleCheckSolid } from '@fortawesome/free-solid-svg-icons';

	export let todo: Todo;

	function toggleCheck() {
		todo.complete = !todo.complete;
	}
</script>

<div class="flex items-center p-4 border-t border-t-text max-w-3xl">
	<div class="flex-grow">
		<div class="text-lg font-medium text-text">{todo.title}</div>
		<div class="text-sm text-text flex items-center">
			<!-- TODO get data from todo -->
			<span class="mr-2">11/4/24</span>
		</div>
	</div>

	<button
		type="button"
		on:click={toggleCheck}
		class="mr-4 cursor-pointer"
		aria-pressed={todo.complete}
	>
		{#if todo.complete}
			<Fa icon={faCircleCheckSolid} size="2x" class="text-teal" />
		{:else}
			<Fa icon={faCircleCheck} size="2x" class="text-surface2" />
		{/if}
	</button>
</div>
