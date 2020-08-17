import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.GATSBY_apiKey,
    authDomain: process.env.GATSBY_authDomain,
    databaseURL: process.env.GATSBY_databaseURL,
    projectId: process.env.GATSBY_projectId,
    storageBucket: process.env.GATSBY_storageBucket,
    messagingSenderId: process.env.GATSBY_messagingSenderId,
    appId: process.env.GATSBY_appId,
    measurementId: process.env.GATSBY_measurementId
};

firebase.initializeApp(firebaseConfig);

export default firebase;