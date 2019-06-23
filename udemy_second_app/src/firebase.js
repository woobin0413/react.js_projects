import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const config = {
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
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseDB
};
