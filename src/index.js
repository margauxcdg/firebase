import './src/css/style.css'
import{
  hideLoginError,
  showLoginState,
  showLoginForm,
  btnLogin,
  btnSignup,
  btnLogout,
  txtPassword
} from './ui'


import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDH4ojAbx_UHeQ13v_YP3tzDs1kRc7M5iQ",
  authDomain: "furtopia-55356.firebaseapp.com",
  databaseURL: "https://furtopia-55356-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "furtopia-55356",
  storageBucket: "furtopia-55356.appspot.com",
  messagingSenderId: "778204288746",
  appId: "1:778204288746:web:87d58fabab3e0bef1d6993"
})

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('logged in');
  } else {
    console.log('no user');
  }
  });