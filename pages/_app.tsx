import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
