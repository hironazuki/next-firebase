import { ReactNode, VFC, memo } from 'react';

import { Stack } from '@chakra-ui/react';
import { SideMenu } from '@components/molecules/SideMenu';
import { FooterMenu } from '@components/molecules/FooterMenu';

type Props = {
  children: ReactNode;
};
export const StickyMenu: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Stack
        minHeight="100vh"
        display={{ base: 'flex', md: 'grid' }}
        gridTemplateColumns="100px minmax(0,1fr)"
        gridTemplateRows="minmax(270px,auto) 1fr"
      >
        <Stack spacing="1.5rem" px="1rem" gridColumn="2 / 4" gridRow="1 / 3" width="95%">
          {children}
        </Stack>
        <SideMenu />
      </Stack>
      <FooterMenu />
    </>
  );
});
