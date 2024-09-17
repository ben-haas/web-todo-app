<script lang="ts">
	import type {PageData} from './$types'

	export let data: PageData;

	$: todo = data.todo;
</script>

<h1>{todo?.title}</h1>
<p>{todo?.description}</p>