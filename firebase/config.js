const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore/lite");

const firebaseConfig = {
  apiKey: "AIzaSyABI5KRGCVOq3m5gxXieCHW_LqNhvAk_pQ",
  authDomain: "darpan-b8972.firebaseapp.com",
  projectId: "darpan-b8972",
  storageBucket: "darpan-b8972.appspot.com",
  messagingSenderId: "122553853358",
  appId: "1:122553853358:web:63da65e81763888c07943f",
  measurementId: "G-CC07JEJF0K",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;
