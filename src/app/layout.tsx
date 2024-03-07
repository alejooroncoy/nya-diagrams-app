import type { Metadata } from 'next';
import './globals.css';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import { Jost } from 'next/font/google';
const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}