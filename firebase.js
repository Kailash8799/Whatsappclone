import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyAvlOj7U5iSCOGEelMRS13pKRo2Halv4s8",
    authDomain: "chatapp-cdb61.firebaseapp.com",
    projectId: "chatapp-cdb61",
    storageBucket: "chatapp-cdb61.appspot.com",
    messagingSenderId: "819232926738",
    appId: "1:819232926738:web:36d7e51661742f1df87ccb",
    measurementId: "G-H9X52Y2HJF"
  };


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
