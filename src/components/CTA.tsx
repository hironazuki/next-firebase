import { Button, Box, useColorMode, Flex, Icon, Text } from '@chakra-ui/react';
import Link from '@components/Link';

import { Container } from './Container';
import { FaUserAlt, FaSignOutAlt, FaListAlt } from 'react-icons/fa';

export const CTA = () => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'blue.100', dark: 'blue.600' };

  const color = { light: 'black', dark: 'white' };
  return (
    <Flex
      display={{ md: 'none' }}
      position="sticky"
      bottom="0"
      height="calc(env(safe-area-inset-bottom,0px) + 56px)"
      paddingBottom="calc(env(safe-area-inset-bottom,0px) + 56px)"
    >
      <Box bg={bgColor[colorMode]} color={color[colorMode]}>
        <Link width="calc(100% / 3)" textAlign="center" display="inline-block">
          <Icon as={FaUserAlt} w={6} h={6} mt="2" />
          <Text display="block" textAlign="center">
            aaa
          </Text>
        </Link>
        <Link width="calc(100% / 3)" textAlign="center" display="inline-block">
          <Icon as={FaUserAlt} w={6} h={6} mt="2" />
          <Text display="block" textAlign="center">
            aaa
          </Text>
        </Link>
        <Link width="calc(100% / 3)" textAlign="center" display="inline-block">
          <Icon as={FaUserAlt} w={6} h={6} mt="2" />
          <Text display="block" textAlign="center">
            aaa
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};
