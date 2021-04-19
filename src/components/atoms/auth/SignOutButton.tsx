import { VFC } from 'react';
import firebase from 'firebase/app';
import { Button } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';

import { currentUserState } from '@states/currentUser';
import { useRouter } from 'next/router';

export const SignOutButton: VFC = () => {
  const setCurrentUser = useSetRecoilState(currentUserState);
  const router = useRouter();

  const Logout = async () => {
    await router.push('/');
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
