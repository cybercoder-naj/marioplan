import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2mVm3sy6eHZZTrhystrG53EvVk3eArwE",
    authDomain: "mario-plan-36408.firebaseapp.com",
    projectId: "mario-plan-36408",
    storageBucket: "mario-plan-36408.appspot.com",
    messagingSenderId: "153765492497",
    appId: "1:153765492497:web:c945ed91cef33e0a623eb0",
    measurementId: "G-BL34Q9KF0N"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;