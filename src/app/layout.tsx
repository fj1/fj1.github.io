import type { Metadata } from 'next';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { josefinSans } from './fonts';

import './globals.css';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Frances Jurek',
  description: 'Software engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${josefinSans.className} ${styles.body}`}>
        <Header />
        <main className={styles.mainContainer}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
