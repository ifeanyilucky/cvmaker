import React from 'react';
import type { AppProps } from 'next/app';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { UseLayoutEffectParent } from '../hooks/useLayoutEffectParent';
import { GlobalProvider } from '../context/GlobalState';
// import { store, persistor } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  if (!pathname.includes('/app')) {
    return (
      <UseLayoutEffectParent>
        <GlobalProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </GlobalProvider>
      </UseLayoutEffectParent>
    );
  }
  return (
    <>
      {/* <Provider store={store}>
        <PersistGate
          loading={<h2>Is loading, hold on</h2>}
          persistor={persistor}
        > */}
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
      {/* </PersistGate>
      </Provider> */}
    </>
  );
}

export default MyApp;
