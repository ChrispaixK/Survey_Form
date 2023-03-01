// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
