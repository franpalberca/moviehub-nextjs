import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {UserProvider} from '@auth0/nextjs-auth0/client';
import AuthProvider from '@/components/authProvider/authProvider';
import {Navbar} from '@/components/navbar/navbar';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'MovieHub',
	description: 'Next JS site for your movies',
	icons: {
		icon: '/31087.png',
	},
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<UserProvider>
					<AuthProvider>
						<Navbar />
						{children}
					</AuthProvider>
				</UserProvider>
			</body>
		</html>
	);
}
