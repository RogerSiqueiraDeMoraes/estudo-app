// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCYvh4XLgie8-IAT6f3W9MzZCAuZ5i9ejM",

  authDomain: "estudo-app-e1627.firebaseapp.com",

  projectId: "estudo-app-e1627",

  storageBucket: "estudo-app-e1627.firebasestorage.app",

  messagingSenderId: "430783265941",

  appId: "1:430783265941:web:1e88811c559c1dece92f9c",

  measurementId: "G-6QRPC54MTL"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);