import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('/api/todos');

	if (res.ok) {
		const todos = await res.json();
		return {
			todos,
		};
	}

	const errorJSON = await res.json();
	throw error(res.status, errorJSON.message);
};