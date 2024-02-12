const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore/lite");


  const firebaseConfig = {
    apiKey: "AIzaSyBtetdJHS8H14LTAGJvey04cLocrrcStUU",
    authDomain: "darpan-4b873.firebaseapp.com",
    projectId: "darpan-4b873",
    storageBucket: "darpan-4b873.appspot.com",
    messagingSenderId: "18519441131",
    appId: "1:18519441131:web:23025237cd065d037148ae",
    measurementId: "G-H0J2C7YBH5"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;
