import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOrNB78V-98goQXHiXBHHrWglQwt2OS44",
  authDomain: "cart-57f97.firebaseapp.com",
  projectId: "cart-57f97",
  storageBucket: "cart-57f97.appspot.com",
  messagingSenderId: "121786313210",
  appId: "1:121786313210:web:1c32315704eb756e2c5c43",
  measurementId: "G-HT1EVJCV99"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
