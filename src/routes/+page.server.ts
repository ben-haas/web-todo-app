import type { PageServerLoad } from './$types';
import { loadTodos } from '$lib/server/database';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
  const accessToken = cookies.get('access-token')

  if (!accessToken) {
    throw redirect(307, '/login')
  }

  try {
    const todos = await loadTodos(accessToken);
    return { todos };
  } catch (error) {
    console.error('Failed to load todos:', error);
    throw error;
  }
};
