import Link from 'next/link';

import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { CTA } from '../components/CTA';
import { useCurrentUser } from '@hooks/useCurrentUser';

const Index = () => {
  const { currentUser } = useCurrentUser();

  return (
    <>
      {currentUser ? (
        <>
          <div>あなたのユーザー名は{currentUser.displayName}です</div>
        </>
      ) : (
        <p>ログインしていません</p>
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
    </>
  );
};

export default Index;
