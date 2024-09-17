<script lang="ts">
	import type { Todo } from '$lib/types';

	export let todo: Todo
	export let toggleComplete: (id: number) => void;
</script>

<div class="flex items-center justify-between p-2 border-b">
	<div class="flex items-center">
		<input
			type="checkbox"
			checked={todo.complete}
			on:change={() => toggleComplete(todo.id)}
			class="mr-2"
		/>
		<span class:line-through={todo.complete}>{todo.title}</span>
	</div>
</div>