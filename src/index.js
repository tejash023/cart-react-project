import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB_AK4rHsDZRLzAGVAK_1G--inTNDjOEc4",
    authDomain: "cart-867d5.firebaseapp.com",
    projectId: "cart-867d5",
    storageBucket: "cart-867d5.appspot.com",
    messagingSenderId: "966028062137",
    appId: "1:966028062137:web:d13031d7ff34b6f1b49a68"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




