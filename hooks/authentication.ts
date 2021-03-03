import firebase from 'firebase/app';
import '@lib/firebase';
import { useEffect } from 'react';
import { useSetRecoilState, RecoilRoot } from 'recoil';
import { currentUserState } from '../states/currentUser';

export function Authentication() {
  // グローバルステートにユーザー情報をセットするためのもの
  const setCurrentUser = useSetRecoilState(currentUserState);

  useEffect(() => {
    (async function () {
      try {
        firebase
          .auth()
          .signInAnonymously()
          .catch(function (error) {
            // Handle Errors here.
            console.error(error);
          });
        firebase.auth().onAuthStateChanged((user) => {
          console.log(user);
          if (user) {
            setCurrentUser({
              uid: user.uid,
              isAnonymous: user.isAnonymous,
            });
          } else {
            console.log('set');
            // User is signed out.
            setCurrentUser(null);
          }
        });
        // const { currentUser } = await fetchCurrentUser(); // サーバーへのリクエスト（未ログインの場合は401等を返すものとする）
        // ログインユーザーの情報が取得できたのでグローバルステートにセット
        // setCurrentUser(currentUser);
      } catch {
        // 未ログイン（未ログイン時のリダイレクト処理などをここに書いても良いかも）
        console.log('test');
        setCurrentUser(null);
      }
    })();
  }, []);

  return null;
}
