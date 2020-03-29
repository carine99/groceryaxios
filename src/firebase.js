import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBln2E9Msi06A9jaWK3cewAkGakjGqeVQw",
  authDomain: "team-work-90f9e.firebaseapp.com",
  databaseURL: "https://team-work-90f9e.firebaseio.com",
  projectId: "team-work-90f9e",
  storageBucket: "team-work-90f9e.appspot.com",
  messagingSenderId: "102595770050",
  appId: "1:102595770050:web:e8159c92b99dbb0a0ead5b",
  measurementId: "G-1BP03LBXPQ"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;