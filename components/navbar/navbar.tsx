'use client';
import styles from './navbar.module.css';
import {useUser} from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import {useEffect} from 'react';

export const Navbar = () => {
	const urlUsers = process.env.NEXT_PUBLIC_API_USERS;
	const {user, error, isLoading} = useUser();

	const userID = async () => {
		const response = await fetch('http://localhost:8080/users', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		const data = await response.json();
		return data;
	};

	useEffect(() => {
		const fetchData = async () => {
			const data = await userID();
			console.log(data);
		};
		if (user) {
			fetchData();
		}
	}, [user]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<div className={styles.navbar}>
			<div className={styles.navbar__links}>
				<div className={styles.navbar__links__left}>{user ? <Link href="/private">MOVIE'S TIME</Link> : <Link href="/">MOVIE'S TIME</Link>}</div>
				{user ? <h3 className={styles.navbar__links__right__welcome}>Welcome {user?.name}</h3> : <h3 className="styles.navbar__links-right__welcome">Please log in</h3>}
				<div className={styles.navbar__links__right}>
					{user ? (
						<>
							{/* <ModalCreationMovies getToken={() => getAccessTokenSilently()} /> */}
							<div className={styles.navbar__divButtonProfile}>
								<Link href="/private/profile" className={styles.profile__link}>
									Profile
								</Link>
							</div>
							<a href="/api/auth/logout">Logout</a>
						</>
					) : (
						<a href={'/api/auth/login'}>Login</a>
					)}
				</div>
			</div>
		</div>
	);
};
