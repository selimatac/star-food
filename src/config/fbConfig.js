import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAhIYeMRHX7wCkUw18mjKfbKBiRf5WaIKY",
    authDomain: "starfood-a8ef5.firebaseapp.com",
    databaseURL: "https://starfood-a8ef5-default-rtdb.firebaseio.com",
    projectId: "starfood-a8ef5",
    storageBucket: "starfood-a8ef5.appspot.com",
    messagingSenderId: "73620356332",
    appId: "1:73620356332:web:c387fd114862574a0d79c9",
  };

try {
	firebase.initializeApp(firebaseConfig);
	firebase.firestore();
	console.log("Firebase Initialized");
} catch (err) {
	console.log("Error Initializing Firebase");
}

export default firebase;