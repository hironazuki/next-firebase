import Link from 'next/link';

import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

import { SignOutButton } from '@components/atoms/auth/SignOutButton';
import { GoogleSignInButton } from '@components/atoms/auth/GoogleSignInButton';
import { useCurrentUser } from '@hooks/useCurrentUser';

import { SignInModal } from '@components/organisms/SignInModal';
const Index = () => {
  const { currentUser } = useCurrentUser();

  return (
    <Container height="100vh">
      {/* <Hero /> */}
      <Main>
        {currentUser ? (
          <>
            <div>あなたのユーザー名は{currentUser.uid}です</div>
            <SignOutButton />
          </>
        ) : (
          <SignInModal />
        )}
        <Text>
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
          <Code>typescript</Code>.
        </Text>

        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <Link href="/mypage">
              <ChakraLink flexGrow={1} mr={2}>
                My Page <LinkIcon />
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

export default Index;
