import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/analytics';

var firebaseConfig = {
  apiKey: "AIzaSyCiS4LnK4s_UdS6fcvnYxcL7Zm578JbP8Y",
  authDomain: "fec-nathaniel.firebaseapp.com",
  projectId: "fec-nathaniel",
  storageBucket: "fec-nathaniel.appspot.com",
  messagingSenderId: "449762052560",
  appId: "1:449762052560:web:7932c5aab836287a89d1d5",
  measurementId: "G-VY53DD7MN6"
};

firebase.initializeApp(firebaseConfig);

firebase.analytics();

const storage = firebase.storage();

export {
  storage, firebase as default
};