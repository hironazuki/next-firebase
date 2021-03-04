import firebase from 'firebase/app';
import { Button } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { currentUserState } from '../../../../states/currentUser';

export const SignOutButton = () => {
  const setCurrentUser = useSetRecoilState(currentUserState);

  const Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.reload();
      });
    setCurrentUser(null);
  };

  return (
    <Button colorScheme="teal" variant="solid" onClick={() => Logout()}>
      ログアウト
    </Button>
  );
};
