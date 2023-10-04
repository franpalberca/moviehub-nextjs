import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {UserProvider} from '@auth0/nextjs-auth0/client';
import AuthProvider from '@/components/authProvider/authProvider';
import {Navbar} from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import "bootstrap/dist/css/bootstrap.min.css";

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
						{children}
						<AuthProvider />
            			<Footer />
					{/* </AuthProvider> */}
				</UserProvider>
			</body>
		</html>
	);
}
