// import Link from 'next/link';
import { GetStaticProps } from 'next';
import { GoogleSignInButton } from '@components/atoms/auth/GoogleSignInButton';

import Link from '@components/Link/index';
import { useIsAlreadylogged } from '@hooks/useIsAlreadyLogged';

import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

const Login = () => {
  useIsAlreadylogged();

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={{ base: '1', md: '1' }} bg={'cyan.100'}>
        <Stack spacing={4} w={'full'} align={'center'} justify={'center'}>
          <Link href="/">
            <Heading fontSize={'2xl'}>Next-firebase-auth</Heading>
          </Link>
          <Text color={'gray.500'}>アプリの説明等：next.jsにfirebase authをのせたテンプレート</Text>
        </Stack>
      </Flex>

      <Flex flex={{ base: '2', md: '1' }} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <GoogleSignInButton />
        </Stack>
      </Flex>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      isNotLayout: 'true', // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
    },
  };
};

export default Login;
