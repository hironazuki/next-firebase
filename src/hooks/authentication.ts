import { useEffect, memo } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentUserState } from '@states/currentUser';
import { AuthRepository } from '@infra/firebase/auth';
import { UserRepository } from '@infra/firebase/user';

export const Authentication = memo(() => {
  // グローバルステートにユーザー情報をセットするためのもの
  const setCurrentUser = useSetRecoilState(currentUserState);

  useEffect(() => {
    AuthRepository.checkAlreadyLogin({
      successHandle: async (user) => {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaims = idTokenResult.claims['https://hasura.io/jwt/claims'];
        if (hasuraClaims) {
          setCurrentUser({
            uid: user.uid,
            displayName: user.displayName || user.uid.slice(0, 5),
            photoUrl: user.photoURL as string,
            token: token,
          });
        } else {
          // Tokenのリフレッシュを検知するためにコールバックを設定する
          const userRef = await UserRepository.getUserMetadata(user);
          userRef.onSnapshot(async () => {
            const token = await user.getIdToken(true);
            setCurrentUser({
              uid: user.uid,
              displayName: user.displayName || user.uid.slice(0, 5),
              photoUrl: user.photoURL as string,
              token: token,
            });
          });
        }
      },
      errorHandle: () => {
        setCurrentUser(null);
      },
    });
  }, []);

  return null;
});
