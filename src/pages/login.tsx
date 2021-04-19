// import Link from 'next/link';
import { Flex, Heading, Stack, Text, useColorMode } from '@chakra-ui/react';

import { GoogleSignInButton } from '@components/atoms/auth/GoogleSignInButton';
import Link from '@components/atoms/Link';
import { useIsAlreadylogged } from '@hooks/useIsAlreadyLogged';

const Login = () => {
  useIsAlreadylogged();
  const { colorMode } = useColorMode();
  const bgColor = { light: 'cyan.100', dark: 'blue.800' };
  const color = { light: 'gray.500', dark: 'gray.100' };

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={{ base: '1', md: '1' }} bg={bgColor[colorMode]}>
        <Stack spacing={4} w={'full'} align={'center'} justify={'center'}>
          <Link href="/">
            <Heading fontSize={'2xl'}>Next-firebase-auth</Heading>
          </Link>
          <Text color={color[colorMode]}>
            アプリの説明等：next.jsにfirebase authをのせたテンプレート
          </Text>
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

export default Login;
