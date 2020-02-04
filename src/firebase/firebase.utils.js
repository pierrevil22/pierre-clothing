import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {        
    apiKey: "AIzaSyAYIcxNwfNKhAwpV7ZDUAvYfsXLYA6dBGo",
    authDomain: "crown-db-6d5b0.firebaseapp.com",
    databaseURL: "https://crown-db-6d5b0.firebaseio.com",
    projectId: "crown-db-6d5b0",
    storageBucket: "crown-db-6d5b0.appspot.com",
    messagingSenderId: "354596575892",
    appId: "1:354596575892:web:569e351b67283d1ab17281",
    measurementId: "G-P58CQDD77P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
