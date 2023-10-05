import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {UserProvider} from '@auth0/nextjs-auth0/client';
import AuthProvider from '@/components/authProvider/authProvider';
import {Navbar} from '@/components/navbar/navbar';
import {Footer} from '@/components/footer/footer';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ModalCreationMovies } from '@/components/modal/modalCreationMovies';
config.autoAddCss = false;

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
					<Navbar />
					<ModalCreationMovies />
					{children}
					{/* <AuthProvider /> */}
					<Footer />
				</UserProvider>
			</body>
		</html>
	);
}
