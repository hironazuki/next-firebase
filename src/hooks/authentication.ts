import { useEffect, memo } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentUserState } from '@states/currentUser';
import { AuthRepository } from '@repository/auth';

export const Authentication = memo(() => {
  // グローバルステートにユーザー情報をセットするためのもの
  const setCurrentUser = useSetRecoilState(currentUserState);

  useEffect(() => {
    AuthRepository.checkAlreadyLogin({
      successHandle: (user) => {
        setCurrentUser({
          uid: user.uid,
          displayName: user.displayName as string,
          photoUrl: user.photoURL as string,
        });
      },
      errorHandle: () => {
        setCurrentUser(null);
      },
    });
  }, []);

  return null;
});
