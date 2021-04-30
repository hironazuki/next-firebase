import { useState, VFC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { AuthRepository } from '@repository/auth';

export const GoogleSignInButton: VFC<ButtonProps> = (props) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const LogIn = async () => {
    setIsProcessing(true);
    await AuthRepository.loginGoogle()
      .catch(() => {
        // console.log(error);
        // const errorCode = error.code;
        // console.log(errorCode);
        // const errorMessage = error.message;
        // console.log(errorMessage);
      })
      .finally(() => setIsProcessing(false));
  };
  return (
    <Button
      w={'full'}
      isLoading={isProcessing}
      colorScheme="gray"
      leftIcon={<FcGoogle />}
      loadingText="ログイン処理中..."
      variant="solid"
      {...props}
      onClick={() => LogIn()}
    >
      Google で ログイン
    </Button>
  );
};
