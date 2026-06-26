// firebase-config.js
// Firebase API configuration

const firebaseConfig = {
    apiKey: "AIzaSyAyDAv1zWPohgPMr5j_laYAQVP8SUN3Rhg",
    authDomain: "blackbirdlk.firebaseapp.com",
    projectId: "blackbirdlk",
    storageBucket: "blackbirdlk.firebasestorage.app",
    messagingSenderId: "544761780589",
    appId: "1:544761780589:web:e0f8cb813feedcd55f2264"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    window.db = firebase.firestore();
} else {
    console.error("Firebase SDK not loaded before firebase-config.js");
}
