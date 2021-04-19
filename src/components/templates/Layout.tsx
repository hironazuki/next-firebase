import { ReactNode } from 'react';

import { Container } from '@components/Container';
import { Main } from '@components/Main';
import { WithSubnavigation } from '@components/organisms/navbar/WithSubnavigation';
import { Footer } from '@components/Footer';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container height="100%">
      <WithSubnavigation />

      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};
