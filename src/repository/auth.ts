import Firebase from '@lib/firebase';
import firebase from 'firebase/app';

export const AuthRepository = {
  loginGoogle: async (): Promise<firebase.auth.UserCredential | null> => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      await Firebase.instance.auth.signInWithRedirect(provider);
      const userCredential = await Firebase.instance.auth.getRedirectResult();

      return userCredential;
    } catch (e) {
      throw new Error('loginに失敗しました');
    }
  },
  checkAlreadyLogin: ({
    successHandle,
    errorHandle,
  }: {
    successHandle: (user: firebase.User) => void;
    errorHandle: () => void;
  }): void => {
    Firebase.instance.auth.onAuthStateChanged((user) => {
      if (user) {
        successHandle(user);
      } else {
        errorHandle();
      }
    });
  },
  logout: () => {
    Firebase.instance.auth.signOut();
  },
  delete: () => {
    if (Firebase.instance.auth.currentUser) Firebase.instance.auth.currentUser.delete();
  },
};
