import { FC, VFC } from 'react';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Authentication } from '@hooks/authentication';
import { ApolloProvider } from '@lib/ApolloProvider';

const Noop: FC = ({ children }) => <>{children}</>;

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  const Layout = (Component as any).Layout || Noop;
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width,viewport-fit=cover" />
      </Head>
      <RecoilRoot>
        <Authentication />
        <ApolloProvider>
          <ChakraProvider resetCSS theme={theme}>
            <Layout pageProps={pageProps}>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </ApolloProvider>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
