import { Text } from '@chakra-ui/react';

import { StickyMenu } from '@components/organisms/layout/StickyMenu';
import { Layout } from '@components/templates/Layout';

const Menu = () => {
  return (
    <StickyMenu>
      <Text>md: サイドメニュー</Text>
      <Text>sm: フッターメニュー</Text>
    </StickyMenu>
  );
};

Menu.Layout = Layout;

export default Menu;
