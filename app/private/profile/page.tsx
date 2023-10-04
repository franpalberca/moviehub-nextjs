'use client'
import {useUser} from '@auth0/nextjs-auth0/client';
import styles from './profile.module.css'

const ProfileComponent = () => {
	const {isLoading, user} = useUser();

	if (isLoading) {
		return <div>Loading...</div>;
	}

    const picture = user?.picture || '';
    const name = user?.name || '';

	return (
		<div className={styles.user__info}>
            <div className={styles.card__profile}>
			<h1 className={styles.title}>Hello {name}</h1>
			<img className={styles.picture} src={picture} alt={name} />
			<h3 className={styles.email}>Email: {user?.email}</h3>
            </div>
		</div>
	);
};

export default ProfileComponent
