// import Link from 'next/link';
import { Hero } from '@components/Hero';
import { StickyMenu } from '@components/organisms/layout/StickyMenu';
import { Layout } from '@components/templates/Layout';

const Menu = () => {
  return (
    <StickyMenu>
      <Hero />
    </StickyMenu>
  );
};

Menu.Layout = Layout;

export default Menu;
