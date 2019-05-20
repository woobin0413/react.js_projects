import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

var config = {
  apiKey: "apiKey",
  authDomain: "authDomain.firebaseapp.com",
  databaseURL: "https://databaseURL.firebaseio.com",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
// firebaseDB
//   .ref("matches")
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());
//   });

export { firebase, firebaseMatches };
