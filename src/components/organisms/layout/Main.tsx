import { VFC } from 'react';
import { Stack, StackProps } from '@chakra-ui/react';

export const Main: VFC<StackProps> = (props) => (
  <Stack
    flex="1 0 auto"
    display="block"
    spacing="1.5rem"
    width="100%"
    maxWidth="64rem"
    pt="8rem"
    mx="auto"
    {...props}
  />
);
