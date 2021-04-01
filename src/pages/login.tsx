import Link from 'next/link';

import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';

import { GoogleSignInButton } from '@components/atoms/auth/GoogleSignInButton';

import { useIsAlreadylogged } from '@hooks/useIsAlreadyLogged';

const Mypage = () => {
  useIsAlreadylogged();
  return (
    <>
      <Hero title="Login Page" />

      <Text>
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
    </>
  );
};

export default Mypage;
