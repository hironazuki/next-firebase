import { useState } from 'react';
import firebase from 'firebase/app';
import { Button } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

export const GoogleSignInButton = () => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const LogIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    setIsProcessing(true);
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result: any) {
        setIsProcessing(false);
        return result;
      })
      .catch(function (error) {
        console.log(error);
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <Button
      isLoading={isProcessing}
      colorScheme="blue"
      leftIcon={<FcGoogle />}
      loadingText="ログイン処理中..."
      variant="outline"
      onClick={() => LogIn()}
    >
      ログイン
    </Button>
  );
};
