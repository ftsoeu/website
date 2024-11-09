import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/Navbar/NavBar';
import MobileList from '@/components/Navbar/MobileList';

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
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='absolute w-full h-full'>
          <NavBar />
          <MobileList />
          {children}
        </div>
      </body>
      {isVisible && <script src='https://unpkg.com/spacingjs' defer></script>}
    </html>
  );
}
