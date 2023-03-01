// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBQR02e4DJ7qi2v3gWDkcuDf6hMMftndb8',
  authDomain: 'disneyplus-clone-7d7b4.firebaseapp.com',
  projectId: 'disneyplus-clone-7d7b4',
  storageBucket: 'disneyplus-clone-7d7b4.appspot.com',
  messagingSenderId: '287895414625',
  appId: '1:287895414625:web:08bce810516052a6d78720',
  measurementId: 'G-WKZX5R9BN8',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
