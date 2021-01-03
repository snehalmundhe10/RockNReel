import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDEvAE606GO-p7h4LaVYIf-ptJvCzbEE8",
    authDomain: "reels-a82df.firebaseapp.com",
    projectId: "reels-a82df",
    storageBucket: "reels-a82df.appspot.com",
    messagingSenderId: "998901749649",
    appId: "1:998901749649:web:86c462dcbb73ab59166c30",
    measurementId: "G-MRPCF6BJMH"
  };
  const firebaseApp = 
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;