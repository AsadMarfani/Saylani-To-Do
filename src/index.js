import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyA58iUEDlUpAGGMzod3Fv1rr-MjfFG-7e0",
    authDomain: "todo-app-d49c1.firebaseapp.com",
    databaseURL: "https://todo-app-d49c1.firebaseio.com",
    storageBucket: "todo-app-d49c1.appspot.com",
    messagingSenderId: "926891104777"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
