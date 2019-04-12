import Firebase from 'firebase'
 let config = {
    apiKey: "AIzaSyCc80p7vl4AXw9XhveYt_8jG81wQIL5iIY",
    authDomain: "image-gallery-51b40.firebaseapp.com",
    databaseURL: "https://image-gallery-51b40.firebaseio.com",
    projectId: "image-gallery-51b40",
    storageBucket: "image-gallery-51b40.appspot.com",
    messagingSenderId: "282394184675"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()