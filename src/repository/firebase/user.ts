import Firebase from '@lib/firebase';
import firebase from 'firebase/app';

export const UserRepository = {
  getUserMetadata: async (user: firebase.User) => {
    const userRef = await Firebase.instance.db.collection('user_meta').doc(user.uid);

    return userRef;
  },
};
