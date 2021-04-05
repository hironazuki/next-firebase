import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';
import '@lib/firebase';
import { RecoilRoot } from 'recoil';
import { Authentication } from '../../hooks/authentication';

import { Layout } from '@components/templates/Layout';
import { Container } from '@components/Container';
import { Main } from '@components/Main';
import { WithSubnavigation } from '@components/organisms/Navbar/WithSubnavigation';
import { Footer } from '@components/Footer';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width,viewport-fit=cover" />
      </Head>
      <RecoilRoot>
        <ChakraProvider resetCSS theme={theme}>
          <Authentication />
          {/* <AppInit /> */}
          {/* <Container height="100%">
          <WithSubnavigation />

          <Main> */}
          {pageProps.isNotLayout ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}

          {/* </Main>
          <Footer />
        </Container> */}
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
