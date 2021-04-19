import { VFC } from 'react';
import NextLink from 'next/link';
import { Link, LinkProps } from '@chakra-ui/react';

const ModifiedLink: VFC<LinkProps> = (props) => {
  return (
    <NextLink href={props.href ?? '#'}>
      <Link
        {...props}
        style={{ textDecoration: 'none' }}
        onClick={() => (document.activeElement as HTMLElement).blur()}
      />
    </NextLink>
  );
};

export default ModifiedLink;
