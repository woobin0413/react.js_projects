import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

var config = {
  apiKey: "AIzaSyBv1Ypss6bzHsedhN0lmewu0qhfLC-84l0",
  authDomain: "m-city-32017.firebaseapp.com",
  databaseURL: "https://m-city-32017.firebaseio.com",
  projectId: "m-city-32017",
  storageBucket: "m-city-32017.appspot.com",
  messagingSenderId: "545952474114",
  appId: "1:545952474114:web:ff0a293c8ed4859e"
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
