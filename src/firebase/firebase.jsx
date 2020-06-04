import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDp0Dx_U79LPmXhOm195orBFzTpTZ9ErZM",
  authDomain: "sting-homepage.firebaseapp.com",
  databaseURL: "https://sting-homepage.firebaseio.com",
  projectId: "sting-homepage",
  storageBucket: "sting-homepage.appspot.com",
  messagingSenderId: "1061113749222",
  appId: "1:1061113749222:web:b4af25c71bbe097a04e527",
  measurementId: "G-GTBBNSZP0F"
};

firebase.initializeApp(firebaseConfig);

export const firebaseDb = firebase.database();