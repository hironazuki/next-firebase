import Link from 'next/link';

import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem, Stack } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { CTA } from '../components/CTA';

import { useCurrentUser } from '@hooks/useCurrentUser';
import { useRequireLogin } from '@hooks/useRequireLogin';
const Mypage = () => {
  useRequireLogin();
  const { currentUser, isAuthChecking } = useCurrentUser();
  if (isAuthChecking) return <div>ログイン情報を確認中…</div>;
  return (
    <>
      <Stack spacing="1.5rem" px="1rem" minHeight="100vh">
        {currentUser && <Hero title={`あなたのユーザー名は${currentUser.uid}です`} />}
        <Text>
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
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
      </Stack>
      <CTA />
    </>
  );
};

export default Mypage;
