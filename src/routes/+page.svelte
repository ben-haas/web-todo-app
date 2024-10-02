<script lang="ts">
	import type { PageServerData } from './$types';
	import TodoItem from '$lib/components/TodoItem.svelte';

	export let data: PageServerData;

	$: todos = data.todos;
	$: completedTodos = todos.filter((todo: { complete: boolean }) => todo.complete);
	$: incompleteTodos = todos.filter((todo: { complete: boolean }) => !todo.complete);
</script>

<div class="flex justify-center pt-8">
	{#if incompleteTodos && incompleteTodos.length > 0}
		<ul class="flex flex-col w-1/2">
			{#each incompleteTodos as todo}
				<li class="last:border-b border-b-mauve">
					<TodoItem {todo} />
				</li>
			{/each}
		</ul>
	{/if}
</div>

<div class="flex justify-center pt-8">
	{#if completedTodos && completedTodos.length > 0}
		<ul class="flex flex-col w-1/2">
			{#each completedTodos as todo}
				<li class="last:border-b border-b-mauve opacity-40">
					<TodoItem {todo} />
				</li>
			{/each}
		</ul>
	{/if}
</div>
