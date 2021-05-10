import { VFC } from 'react';
import { useSetRecoilState } from 'recoil';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaUserAlt, FaSignOutAlt, FaListAlt } from 'react-icons/fa';

import Link from '@components/atoms/Link';
import { useCurrentUser } from '@hooks/useCurrentUser';
import { DarkModeSwitch } from '@components/atoms/switch/DarkModeSwitch';
import { SignInModal } from '@components/organisms/SignInModal';
import { currentUserState } from '@states/currentUser';
import { AuthRepository } from '@repository/firebase/auth';

export const Header: VFC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { currentUser } = useCurrentUser();
  const setCurrentUser = useSetRecoilState(currentUserState);

  const LogOut = async () => {
    setCurrentUser(null);
    AuthRepository.logout();
  };

  return (
    <Box width="100%" position="fixed" zIndex={1000}>
      <Flex
        style={{
          backdropFilter: 'saturate(180%) blur(20px)',
        }}
        bg={useColorModeValue('clearWhite', 'clearBlack')}
        color={useColorModeValue('black.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          display={{ base: 'none', sm: 'flex' }}
          justify={{ base: 'center', md: 'start' }}
          alignItems={'center'}
        >
          <Link
            href="/"
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            Next-firebase-Auth
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          <Flex alignItems={'center'}>
            <DarkModeSwitch />
          </Flex>
          {currentUser ? (
            <>
              <Flex alignItems={'center'}>
                <Menu>
                  <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'}>
                    <Avatar size={'sm'} src={currentUser.photoUrl} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem icon={<FaUserAlt />}>Link 1</MenuItem>
                    <MenuItem icon={<FaListAlt />}>Link 2</MenuItem>
                    <MenuDivider />
                    <MenuItem icon={<FaSignOutAlt />} onClick={() => LogOut()}>
                      ログアウト
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </>
          ) : (
            <SignInModal />
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Text
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                color={useColorModeValue('gray.600', 'gray.200')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('gray.800', 'white'),
                }}
              >
                <Link href={navItem.href ?? '#'}>{navItem.label}</Link>
              </Text>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={useColorModeValue('white', 'gray.800')}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href ?? '#'}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          <Link href={href ?? '#'}>{label}</Link>
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'ホバーリンク',
    children: [
      {
        label: 'Menu付きページ',
        subLabel: '画面サイズに合わせたメニューが出るページ',
        href: '/menu',
      },
      {
        label: 'My Page',
        subLabel: 'ログインしていない時、ログインページに飛ばす',
        href: '/mypage',
      },
    ],
  },
  {
    label: 'hover link',
    children: [
      {
        label: 'piyo',
        subLabel: 'piyo',
        href: '#',
      },
      {
        label: 'piyo2',
        subLabel: 'piyo',
        href: '#',
      },
      {
        label: 'piyo3',
        subLabel: 'piyo',
        href: '#',
      },
    ],
  },
  {
    label: 'My Page',
    href: '/mypage',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
];
