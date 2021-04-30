import { VFC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { AuthRepository } from '@infra/firebase/auth';

export const AnonymousSignInButton: VFC<ButtonProps> = (props) => {
  const LogIn = async () => {
    await AuthRepository.loginAnonymous().catch(() => {
      // console.log(error);
      // const errorCode = error.code;
      // console.log(errorCode);
      // const errorMessage = error.message;
      // console.log(errorMessage);
    });
  };
  return (
    <Button w={'full'} colorScheme="blackAlpha" variant="solid" {...props} onClick={() => LogIn()}>
      匿名 で ログイン
    </Button>
  );
};
