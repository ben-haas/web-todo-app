import { API_URL } from '$env/static/private';
import type { Todo } from '$lib/types';
import { error, json } from '@sveltejs/kit';

export const login = async (email: string, password: string) => {
  const data = { email: email, password: password }
  const res = await fetch(`${API_URL}/v1/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const { access_token, refresh_token } = await res.json();
    const tokens = {
      access_token,
      refresh_token
    }

    return json(tokens, { status: 200 });
  }

  throw error(res.status, res.statusText);
}

export const register = async (email: string, password: string) => {
  const data = { email: email, password: password }
  const res = await fetch(`${API_URL}/v1/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const message = await res.json();
    return json(message, { status: 200 });
  }

  throw error(res.status, res.statusText);

}


export const refreshAccessToken = async () => { }

export const loadTodos = async (token: string) => {
  const res = await fetch(`${API_URL}/v1/todos`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (res.ok) {
    const todos = await res.json();
    return json(todos, { status: 200 });
  }

  throw error(res.status, res.statusText);

}

export const getTodoById = async (id: string, token: string) => {

  const res = await fetch(`${API_URL}/v1/todos/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (res.ok) {
    const todo = await res.json();

    return json(todo, { status: 200 });
  }

  throw error(res.status, res.statusText);
}

export const createTodo = async (todo: Todo, token: string) => {
  const res = await fetch(`${API_URL}/v1/todos`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(todo)
  });

  if (res.ok) {
    const message = await res.json();
    return json(message, { status: 201 });
  }

  throw error(res.status, res.statusText);

};

export const updateTodo = async (todo: Todo, token: string) => {

  const res = await fetch(`${API_URL}/v1/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(todo)
  });

  if (res.ok) {
    const todo = await res.json();

    return json(todo, { status: 204 });
  }

}
