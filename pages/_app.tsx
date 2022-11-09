/* eslint-disable @typescript-eslint/ban-ts-comment */
import '../styles/app.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ReactElement, ReactNode, useState } from 'react';
import { NextPage } from 'next';
import { Toaster } from 'react-hot-toast';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from '@tanstack/react-query';

import { store } from '../store';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        {/* @ts-ignore */}
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
