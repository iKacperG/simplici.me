import firebase from "firebase";


    var firebaseConfig = {
        apiKey: "AIzaSyCaawep7MVIh8BqB1hmh0_S6oxrXqX6LTM",
        authDomain: "simplicime-b74fa.firebaseapp.com",
        databaseURL: "https://simplicime-b74fa.firebaseio.com",
        projectId: "simplicime-b74fa",
        storageBucket: "simplicime-b74fa.appspot.com",
        messagingSenderId: "846614000745",
        appId: "1:846614000745:web:0b0d14224a113468bc1ef8",
        measurementId: "G-YH0KNMZR7B"
    };
// Initialize Firebase
   export const app = firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    const db = firebase.firestore();
    db.settings({timestampsInSnapshots: true})


export default app;