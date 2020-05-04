// ~/plugins/firebase.js

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDMCCqeySrFGbIB1hFk1nLAc3KV5MGEzJM",
    authDomain: "kits-fdef7.firebaseapp.com",
    databaseURL: "https://kits-fdef7.firebaseio.com",
    projectId: "kits-fdef7",
    storageBucket: "kits-fdef7.appspot.com",
    messagingSenderId: "600515144217",
    appId: "1:600515144217:web:f949140027f3b2519d5888",
    measurementId: "G-5P88ENR4VZ"
}

const app = firebase.initializeApp(firebaseConfig)

export const db = app.database()