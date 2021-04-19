import { ReactNode, VFC } from 'react';

import { Container } from '@components/Container';
import { Main } from '@components/Main';
import { WithSubnavigation } from '@components/organisms/navbar/WithSubnavigation';
import { Footer } from '@components/Footer';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <Container height="100%">
      <WithSubnavigation />

      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};
