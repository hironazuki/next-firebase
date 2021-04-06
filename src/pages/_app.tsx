import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';
import '@lib/firebase';
import { RecoilRoot } from 'recoil';
import { Authentication } from '../../hooks/authentication';

import { Layout } from '@components/templates/Layout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width,viewport-fit=cover" />
      </Head>
      <RecoilRoot>
        <ChakraProvider resetCSS theme={theme}>
          <Authentication />
          {pageProps.isNotLayout ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
