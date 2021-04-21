import { ReactNode, VFC } from 'react';

import { Container } from '@components/organisms/layout/Container';
import { Main } from '@components/organisms/layout/Main';
import { Header } from '@components/organisms/layout/Header';
import { Footer } from '@components/organisms/layout/Footer';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <Container height="100%">
      <Header />

      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};
