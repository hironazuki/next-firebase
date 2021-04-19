import { VFC } from 'react';
import { useColorMode, Flex, Icon, Text } from '@chakra-ui/react';

import Link from '@components/atoms/Link';
import { FaUserAlt } from 'react-icons/fa';

export const SideMenu: VFC = () => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'blue.100', dark: 'blue.600' };

  const color = { light: 'black', dark: 'white' };
  return (
    <Flex
      display={{ md: 'block', base: 'none' }}
      position="sticky"
      // flexDirection="column"
      width="80px"
      top="8rem"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Link textAlign="center" display="flex" flexDirection="column" alignItems="center" mb="2rem">
        <Icon as={FaUserAlt} w={6} h={6} mt="2" />
        <Text textAlign="center">aaa</Text>
      </Link>
      <Link textAlign="center" display="flex" flexDirection="column" alignItems="center" mb="2rem">
        <Icon as={FaUserAlt} w={6} h={6} mt="2" />
        <Text textAlign="center">aaa</Text>
      </Link>
      <Link textAlign="center" display="flex" flexDirection="column" alignItems="center" mb="2rem">
        <Icon as={FaUserAlt} w={6} h={6} mt="2" />
        <Text textAlign="center">aaa</Text>
      </Link>
    </Flex>
  );
};
