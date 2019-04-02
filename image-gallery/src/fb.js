import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCc80p7vl4AXw9XhveYt_8jG81wQIL5iIY",
    authDomain: "image-gallery-51b40.firebaseapp.com",
    databaseURL: "https://image-gallery-51b40.firebaseio.com",
    projectId: "image-gallery-51b40",
    storageBucket: "image-gallery-51b40.appspot.com",
    messagingSenderId: "282394184675"
};
firebase.initializeApp(config);

const db = firebase.firestore().collection('images');

export default db;
