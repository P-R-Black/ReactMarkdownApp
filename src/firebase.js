import React, { Component } from 'react'
import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDORPCLSFCN_ThZHlfdwNibWGQGCNSdatA",
    authDomain: "react-markdown-5ae35.firebaseapp.com",
    databaseURL: "https://react-markdown-5ae35-default-rtdb.firebaseio.com",
    projectId: "react-markdown-5ae35",
    storageBucket: "react-markdown-5ae35.appspot.com",
    messagingSenderId: "869784998197",
    appId: "1:869784998197:web:a6784a0fa9a249f241fc7c",
    measurementId: "G-RGW2NJH912"
};
firebase.initializeApp(firebaseConfig);

export default firebase.database();