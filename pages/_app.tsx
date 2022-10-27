import '../styles/app.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Toaster } from 'react-hot-toast';

import { store } from '../store';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Toaster />
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
}

export default MyApp;
