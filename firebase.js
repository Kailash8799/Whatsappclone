import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// export const firebaseConfig = {
//     apiKey: "AIzaSyAvlOj7U5iSCOGEelMRS13pKRo2Halv4s8",
//     authDomain: "chatapp-cdb61.firebaseapp.com",
//     projectId: "chatapp-cdb61",
//     storageBucket: "chatapp-cdb61.appspot.com",
//     messagingSenderId: "819232926738",
//     appId: "1:819232926738:web:36d7e51661742f1df87ccb",
//     measurementId: "G-H9X52Y2HJF"
//   };
export const firebaseConfig = {
  apiKey: "AIzaSyAf30F0txMPt_WHOwc0rIy2j4lLd33x_zg",
  authDomain: "fir-tut-15b77.firebaseapp.com",
  projectId: "fir-tut-15b77",
  storageBucket: "fir-tut-15b77.appspot.com",
  messagingSenderId: "389963333491",
  appId: "1:389963333491:web:d0bc96e0b4482982c20f06",
  measurementId: "G-EGFQWQ48RZ"
  };


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
