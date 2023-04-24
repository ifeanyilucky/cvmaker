import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  if (!pathname.includes('/app')) {
    return (
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
