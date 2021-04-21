import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

export default class Firebase {
  private static _instance: Firebase;
  private _db: firebase.firestore.Firestore;
  private _auth: firebase.auth.Auth;

  private constructor() {
    firebase.initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    });
    this._db = firebase.firestore();
    this._auth = firebase.auth();
  }

  public static get instance(): Firebase {
    if (!this._instance) {
      this._instance = new Firebase();
    }
    return this._instance;
  }

  public get db() {
    if (this._db) {
      return this._db;
    } else {
      this._db = firebase.firestore();
      return this._db;
    }
  }

  public serverTimestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  public get auth() {
    if (this._auth) {
      return this._auth;
    } else {
      this._auth = firebase.auth();
      return this._auth;
    }
  }
}
