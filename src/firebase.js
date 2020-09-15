import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApdxFcx8_7IfiFDQccWlHzEeHVthS487o",
  authDomain: "bt3103-example.firebaseapp.com",
  databaseURL: "https://bt3103-example.firebaseio.com",
  projectId: "bt3103-example",
  storageBucket: "bt3103-example.appspot.com",
  messagingSenderId: "853427402116",
  appId: "1:853427402116:web:47e4943156155b9ce399d1",
  measurementId: "G-M7FX4LGVLZ"
};

  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
