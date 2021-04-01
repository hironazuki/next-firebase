import Link from 'next/link';

import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem, Stack } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { CTA } from '@components/CTA';
import { SideMenu } from '@components/organisms/SideMenu';

import { useCurrentUser } from '@hooks/useCurrentUser';

const Index = () => {
  const { currentUser } = useCurrentUser();

  return (
    <>
      <Stack
        display="grid"
        gridTemplateColumns="100px minmax(0,1fr)"
        gridTemplateRows="minmax(270px,auto) 1fr"
      >
        <Stack spacing="1.5rem" px="1rem" gridColumn="2 / 4" gridRow="1 / 3" mx="auto">
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
        <SideMenu />
      </Stack>
      <CTA />
    </>
  );
};

export default Index;
