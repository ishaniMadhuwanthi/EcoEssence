import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4l-x6w8HPZSpnjiJXQ_5LVzISnIpU3Bc",
  authDomain: "ecoessence-ad04e.firebaseapp.com",
  databaseURL: "https://ecoessence-ad04e.firebaseio.com",
  projectId: "ecoessence-ad04e",
  storageBucket: "ecoessence-ad04e.appspot.com",
  messagingSenderId: "414131093425",
  appId: "1:414131093425:web:8d986812057ab513bcc790",
  measurementId: "G-EHP5DWFT9H"
};

firebase.initializeApp(firebaseConfig);

let app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

ReactDOM.render(app, document.getElementById("root"));
