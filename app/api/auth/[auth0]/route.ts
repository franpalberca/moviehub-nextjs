// app/api/auth/[auth0]/route.js
import {handleAuth, handleLogin, handleLogout} from '@auth0/nextjs-auth0';

export const GET = handleAuth({
	login: handleLogin({
		returnTo: '/private',
		authorizationParams: {
			audience: process.env.GENERAL_SERVER_URL,
		},
	}),
	logout: handleLogout({
		returnTo: '/',
	}),
});
