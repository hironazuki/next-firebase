import Link from 'next/link';

import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem, Stack } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { CTA } from '@components/CTA';

import { useCurrentUser } from '@hooks/useCurrentUser';

const Index = () => {
  const { currentUser } = useCurrentUser();

  return (
    <>
      <Stack spacing="1.5rem" px="1rem">
        {/* <Box px="1rem"> */}
        {currentUser ? (
          <>
            <Text>あなたのユーザー名は{currentUser.displayName}です</Text>
          </>
        ) : (
          <Text>ログインしていません</Text>
        )}
        <Text>
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
          <Code>typescript</Code>.
        </Text>

        <List spacing={3} my={0} minHeight="100vh">
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
      </Stack>
      <CTA />
    </>
  );
};

export default Index;
