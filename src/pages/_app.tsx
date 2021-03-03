import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';
import firebase from 'firebase/app';
import '@lib/firebase';
import { useEffect } from 'react';
import { useSetRecoilState, RecoilRoot } from 'recoil';
import { currentUserState } from '../../states/currentUser';
import { Authentication } from '../../hooks/authentication';
// function AppInit() {
//   // グローバルステートにユーザー情報をセットするためのもの
//   const setCurrentUser = useSetRecoilState(currentUserState);

//   useEffect(() => {
//     (async function () {
//       try {
//         firebase
//           .auth()
//           .signInAnonymously()
//           .catch(function (error) {
//             // Handle Errors here.
//             console.error(error);
//           });
//         firebase.auth().onAuthStateChanged((user) => {
//           if (user) {
//             setCurrentUser({
//               uid: user.uid,
//               isAnonymous: user.isAnonymous,
//             });
//           } else {
//             // User is signed out.
//             setCurrentUser(null);
//           }
//         });
//         // const { currentUser } = await fetchCurrentUser(); // サーバーへのリクエスト（未ログインの場合は401等を返すものとする）
//         // ログインユーザーの情報が取得できたのでグローバルステートにセット
//         // setCurrentUser(currentUser);
//       } catch {
//         // 未ログイン（未ログイン時のリダイレクト処理などをここに書いても良いかも）
//         console.log('test');
//         setCurrentUser(null);
//       }
//     })();
//   }, []);

//   return null;
// }

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ChakraProvider resetCSS theme={theme}>
        <Authentication />
        {/* <AppInit /> */}
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
