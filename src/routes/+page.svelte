<script lang="ts">
	import type { PageServerData} from './$types';

	export let data: PageServerData;

	$: todos = data.todos
</script>

{#if todos && todos.length > 0}
	<ul>
		{#each todos as todo}
			<li>
				<br>
				<h3><a href="/todo/{todo.id}">{todo.title}</a></h3>
				<p>{todo.description}</p>
				<p>Created By: {todo.user_id}</p>
				<br>
			</li>
		{/each}
	</ul>
{/if}