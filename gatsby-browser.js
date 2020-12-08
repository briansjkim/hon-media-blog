import './src/css/index.css';

import firebase from 'firebase/app';
import "firebase/analytics";

firebase.initializeApp({
    apiKey: "AIzaSyAI6ggWUoXrN9vrFfR8sdaVqfJEMZn8SNM",
    authDomain: "blog.hon-media.com/",
    databaseURL: "https://blog-hon-media.firebaseio.com",
    projectId: "blog-hon-media",
    storageBucket: "blog-hon-media.appspot.com",
    messagingSenderId: "149751637126",
    appId: "1:149751637126:web:8b3ab9b331a1c51ebc1d07",
    measurementId: "G-G8W84Z7ZC0"
});

firebase.analytics();
