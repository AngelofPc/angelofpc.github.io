// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDD_2z0-yibhvwko7zTnKbU2OXdIfjjiF4',
  authDomain: 'angelofpc-portolio.firebaseapp.com',
  projectId: 'angelofpc-portolio',
  storageBucket: 'angelofpc-portolio.appspot.com',
  messagingSenderId: '650867334018',
  appId: '1:650867334018:web:b6098b7d9413cc37e3cd9b',
  measurementId: 'G-1YPC4JCQPJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
