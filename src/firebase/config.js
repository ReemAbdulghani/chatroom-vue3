import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDD7PH6mx4Y0Vl0ZLSq2yMyy_du6z_LhYs",
    authDomain: "fb-just-practice.firebaseapp.com",
    projectId: "fb-just-practice",
    storageBucket: "fb-just-practice.appspot.com",
    messagingSenderId: "189661417962",
    appId: "1:189661417962:web:5f90f8957880778d5b6293"
};

// initilize firebase 
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

const projectAuth = firebase.auth()

export { projectFirestore, timestamp, projectAuth }