import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/Navbar/NavBar';
import MobileList from '@/components/Navbar/MobileList';
import Footer from '@/components/Footer/Footer';
import { headers } from 'next/headers';

const inter = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FTSOEU',
  description: 'a Flare Network Delegation Services',
};

const isVisible = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce = headers().get('X-NONCE');

  return (
    <html lang='en'>
      <head>
        {/*<meta
          httpEquiv='Content-Security-Policy'
          content={`default-src 'self' 'nonce-${nonce}'; style-src 'self' 'nonce-${nonce}'; script-src 'self' 'nonce-${nonce}' https://next.ftso.local https://directus.ftso.local https://webdata.ftso.eu;`}
        />*/}
      </head>
      <body className={inter.className}>
        <div className='absolute w-full h-full'>
          <NavBar />
          <MobileList />
          {children}
          <Footer />
        </div>
      </body>
      {isVisible && <script src='https://unpkg.com/spacingjs' defer></script>}
    </html>
  );
}
