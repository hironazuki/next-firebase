import Link from 'next/link';

import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

import { GoogleSignInButton } from '@components/atoms/auth/GoogleSignInButton';

import { useIsAlreadylogged } from '@hooks/useIsAlreadyLogged';

const Mypage = () => {
  useIsAlreadylogged();
  return (
    <Container height="100vh">
      <Hero />

      <Main>
        <Text>
          {/* Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '} */}
          <GoogleSignInButton />
          <Code>typescript</Code>.
        </Text>

        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <Link href="/">
              <ChakraLink flexGrow={1} mr={2}>
                Top Page <LinkIcon />
              </ChakraLink>
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mr={2}>
              Chakra UI <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
              Next.js <LinkIcon />
            </ChakraLink>
          </ListItem>
        </List>
      </Main>
      <DarkModeSwitch />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
      <CTA />
    </Container>
  );
};

export default Mypage;
