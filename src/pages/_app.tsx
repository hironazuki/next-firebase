import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';
import '@lib/firebase';
import { RecoilRoot } from 'recoil';
import { Authentication } from '../../hooks/authentication';

import { Container } from '@components/Container';
import { Main } from '@components/Main';
import { WithSubnavigation } from '@components/organisms/Navbar/WithSubnavigation';
import { Footer } from '@components/Footer';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ChakraProvider resetCSS theme={theme}>
        <Authentication />
        {/* <AppInit /> */}
        <Container height="100%">
          <WithSubnavigation />

          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </Container>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
