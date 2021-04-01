import firebase from 'firebase/app';
import '@lib/firebase';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentUserState } from '../states/currentUser';

export function Authentication() {
  // グローバルステートにユーザー情報をセットするためのもの
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  useEffect(() => {
    // currentUserに値がある場合処理をスキップ
    if (currentUser) {
      return;
    }

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
}
