import { useState, VFC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { AuthRepository } from '@repository/auth';

export const TwitterSignInButton: VFC<ButtonProps> = (props) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const LogIn = async () => {
    setIsProcessing(true);
    await AuthRepository.loginTwitter()
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
      colorScheme="twitter"
      leftIcon={<FaTwitter />}
      loadingText="ログイン処理中..."
      variant="solid"
      {...props}
      onClick={() => LogIn()}
    >
      Twitter で ログイン
    </Button>
  );
};
