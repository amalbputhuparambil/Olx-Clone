import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkpVxPXzDDGazrYgVaWW_nD6TYAfsHpYM",
  authDomain: "olx-clone-440ff.firebaseapp.com",
  databaseURL: "https://olx-clone-440ff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "olx-clone-440ff",
  storageBucket: "olx-clone-440ff.appspot.com",
  messagingSenderId: "620425054043",
  appId: "1:620425054043:web:1892eba137d78432f17c7e",
  measurementId: "G-00TBH0XN2J"
};

export default firebase.initializeApp(firebaseConfig)