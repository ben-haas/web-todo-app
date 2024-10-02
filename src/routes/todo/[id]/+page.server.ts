import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getTodoById } from '$lib/server/database';

export const load: PageServerLoad = async ({ cookies, params }) => {

  const accessToken = cookies.get('access-token')

  if (!accessToken) {
    throw redirect(307, '/login')
  }

  try {
    const res = await getTodoById(params.id, accessToken);
    const todo = await res.json()
    return { todo };
  } catch (error) {
    console.error('Failed to load todo:', error);
    throw error;
  }

};
