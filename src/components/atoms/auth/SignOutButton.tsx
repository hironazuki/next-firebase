import { VFC } from 'react';
import { Button } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';

import { currentUserState } from '@states/currentUser';
import { AuthRepository } from '@repository/firebase/auth';

export const SignOutButton: VFC = () => {
  const setCurrentUser = useSetRecoilState(currentUserState);

  const Logout = async () => {
    setCurrentUser(null);
    await AuthRepository.logout();
  };

  return (
    <Button colorScheme="teal" variant="solid" onClick={() => Logout()}>
      ログアウト
    </Button>
  );
};
