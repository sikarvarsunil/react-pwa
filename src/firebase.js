import firebase from 'firebase';
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBLPTC0lGzseNZr7zv6uuv2Fq7XZHt_sm4",
  authDomain: "react-pwa-55a2e.firebaseapp.com",
  databaseURL: "https://react-pwa-55a2e.firebaseio.com",
  projectId: "react-pwa-55a2e",
  storageBucket: "react-pwa-55a2e.appspot.com",
  messagingSenderId: "563575395013",
  appId: "1:563575395013:web:14a832921a29edfb61d6ac"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;