import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const res = await fetch(`/api/todos/${params.id}`);

	if (res.ok) {
		const todo = await res.json();
		return {
			todo,
		};
	}

	const errorJSON = await res.json();
	throw error(res.status, errorJSON.message);
};