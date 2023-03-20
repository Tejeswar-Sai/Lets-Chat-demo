import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { Provider } from 'react-redux';
import store from './stores/store';


const firebaseConfig = {
  apiKey: "AIzaSyA_V1wlPPa_ralQMqSO8yJEXRrLclv3s2w",
  authDomain: "letschat-c94e4.firebaseapp.com",
  projectId: "letschat-c94e4",
  storageBucket: "letschat-c94e4.appspot.com",
  messagingSenderId: "99706786114",
  appId: "1:99706786114:web:c5ae8045a6b3e2e20778db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore =  getFirestore(app);
const auth = getAuth(app);


 window.store = store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { auth, firestore };