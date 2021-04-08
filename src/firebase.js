import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAXTnj8aImkbo6v9NqLFTSwlBORDr5BkQU",
  authDomain: "tesla-react-f8429.firebaseapp.com",
  projectId: "tesla-react-f8429",
  storageBucket: "tesla-react-f8429.appspot.com",
  messagingSenderId: "12798459693",
  appId: "1:12798459693:web:a38de21767f985d6a89da4",
  measurementId: "G-GLL6S2N8V7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
