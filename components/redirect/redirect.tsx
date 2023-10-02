'use client'
import React from 'react';
import {useRouter} from 'next/navigation';

const Redirect: React.FC<{to: string}> = ({to}) => {
	const router = useRouter();

	setTimeout(() => {
		router.push(to);
	}, 3000);

	return <div>Redirecting to {to} in 3 seconds...</div>;
};

export default Redirect;
