import firebase from 'firebase/app';
import '@lib/firebase';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentUserState } from '../states/currentUser';

export function Authentication() {
  // グローバルステートにユーザー情報をセットするためのもの
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  useEffect(() => {
    if (currentUser !== null) {
      return;
    }

    (async function () {
      try {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            setCurrentUser({
              uid: user.uid,
              isAnonymous: user.isAnonymous,
            });
          } else {
            // User is signed out.
            setCurrentUser(null);
          }
        });
        // const { currentUser } = await fetchCurrentUser(); // サーバーへのリクエスト（未ログインの場合は401等を返すものとする）
        // ログインユーザーの情報が取得できたのでグローバルステートにセット
        // setCurrentUser(currentUser);
      } catch {
        // 未ログイン（未ログイン時のリダイレクト処理などをここに書いても良いかも）
        setCurrentUser(null);
      }
    })();
  }, []);

  return null;
}
