import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAEivS57KNWDn139UYZuWNjqrCN8WRnA8U",
    authDomain: "team-voting-app-d5c7a.firebaseapp.com",
    projectId: "team-voting-app-d5c7a",
    storageBucket: "team-voting-app-d5c7a.appspot.com",
    messagingSenderId: "186561731160",
    appId: "1:186561731160:web:eb2769c5e57f7fc27b882d"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.database();
