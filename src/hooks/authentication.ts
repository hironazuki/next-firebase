import { useEffect, memo } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentUserState } from '@states/currentUser';
import { AuthRepository } from '@infra/firebase/auth';

export const Authentication = memo(() => {
  // グローバルステートにユーザー情報をセットするためのもの
  const setCurrentUser = useSetRecoilState(currentUserState);

  useEffect(() => {
    AuthRepository.checkAlreadyLogin({
      successHandle: (user) => {
        setCurrentUser({
          uid: user.uid,
          displayName: user.displayName || user.uid.slice(0, 5),
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
