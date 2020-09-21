// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA06YkX7JCY03VaKGUj01cg0FCRMxunOQ8",
  authDomain: "slack-clone-c7667.firebaseapp.com",
  databaseURL: "https://slack-clone-c7667.firebaseio.com",
  projectId: "slack-clone-c7667",
  storageBucket: "slack-clone-c7667.appspot.com",
  messagingSenderId: "410287697267",
  appId: "1:410287697267:web:ebc479286a5b0d8ec7e906",
  measurementId: "G-RWJ1B5LYEP"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }

export default db