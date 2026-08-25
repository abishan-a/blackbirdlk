// firebase-config.example.js
// Firebase & Dynamic Products API configuration template
// Rename this file to firebase-config.js and fill in your actual credentials.

const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY_HERE",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN_HERE",
    projectId: "YOUR_FIREBASE_PROJECT_ID_HERE",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET_HERE",
    messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID_HERE",
    appId: "YOUR_FIREBASE_APP_ID_HERE"
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

// Dynamic Products Configuration (JSONBin & Cloudinary)
const CONFIG = {
    JSONBIN_BIN_ID: "YOUR_JSONBIN_BIN_ID_HERE",
    CLOUDINARY_CLOUD_NAME: "YOUR_CLOUDINARY_CLOUD_NAME_HERE",
    CLOUDINARY_API_KEY: "YOUR_CLOUDINARY_API_KEY_HERE"
};
