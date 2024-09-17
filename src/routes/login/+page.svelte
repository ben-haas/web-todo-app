<script>
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';

	const login = async () => {
		const res = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({ email, password })
		});

		if (res.ok) {
			await goto('/');
		}
	};
</script>

<form on:submit|preventDefault={login}>
	<label for="username">Username</label><br />
	<input bind:value={email} type="text" id="username" name="username" placeholder="Username" />

	<br /><br />

	<label for="password">Password</label><br />
	<input
		bind:value={password}
		type="password"
		id="password"
		name="password"
		placeholder="Password"
	/>

	<br /><br />

	<button type="submit">Login</button>
</form>
