import firebase from "firebase";

/*
https://firebase.google.com/docs/reference/js/firebase
*/
const firebaseConfig = {
  apiKey: "AIzaSyD5gkQeO9iBxglnDwlg1h_paHkczg2la9o",
  authDomain: "tinder-clone-7a907.firebaseapp.com",
  projectId: "tinder-clone-7a907",
  storageBucket: "tinder-clone-7a907.appspot.com",
  messagingSenderId: "502902304945",
  appId: "1:502902304945:web:751cf469a863051a77f290"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const database = firebaseApp.firestore();

export default database; 