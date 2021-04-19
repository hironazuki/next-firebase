import { VFC } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

type Props = {
  title?: string;
};

export const Hero: VFC<Props> = (props) => {
  const { title = 'with-chakra-ui-typescript' } = props;
  return (
    <Flex justifyContent="center" alignItems="center" height="10vh">
      <Heading fontSize="2vw">{title}</Heading>
    </Flex>
  );
};
