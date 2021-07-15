import firebase from 'firebase'

const connection = (app) => {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    app.set('firebase', firebase);
}

export default connection