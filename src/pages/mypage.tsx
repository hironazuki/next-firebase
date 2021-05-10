import Link from 'next/link';
import { Link as ChakraLink, Text, List, ListIcon, ListItem, Stack } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { useCurrentUser } from '@hooks/useCurrentUser';
import { useRequireLogin } from '@hooks/useRequireLogin';
import { Layout } from '@components/templates/Layout';
const Mypage = () => {
  useRequireLogin();
  const { currentUser, isAuthChecking } = useCurrentUser();

  if (isAuthChecking) return <div>ログイン情報を確認中…</div>;
  if (!currentUser) return <div>ログインしていません</div>;
  return (
    <>
      <Stack spacing="1.5rem" px="1rem" minHeight="100vh">
        {currentUser && <Text>{`あなたのユーザー名は${currentUser.displayName}です`}</Text>}
        <Text>ログインしてないとだめなページ</Text>

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
    </>
  );
};

Mypage.Layout = Layout;

export default Mypage;
