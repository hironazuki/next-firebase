import firebase from 'firebase/app';
import '@lib/firebase';
import { useEffect, memo } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentUserState } from '@states/currentUser';

export const Authentication = memo(() => {
  // グローバルステートにユーザー情報をセットするためのもの
  const setCurrentUser = useSetRecoilState(currentUserState);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          displayName: user.displayName as string,
          photoUrl: user.photoURL as string,
          isAnonymous: user.isAnonymous,
        });
      } else {
        // ログインしていない場合にnullを入れる
        setCurrentUser(null);
      }
    });
  }, []);

  return null;
});
