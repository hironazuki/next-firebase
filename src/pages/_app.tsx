import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';
import '@lib/firebase';
import { RecoilRoot } from 'recoil';
import { Authentication } from '../../hooks/authentication';

import { WithSubnavigation } from '@components/organisms/Navbar/WithSubnavigation';
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ChakraProvider resetCSS theme={theme}>
        <Authentication />
        {/* <AppInit /> */}
        <WithSubnavigation />
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
