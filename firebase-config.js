// firebase-config.js
// Firebase API configuration

const firebaseConfig = {
    apiKey: "process.env.FIREBASE_API_KEY", // Note: This requires a bundler to work in the browser
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

// Dynamic Products Configuration (JSONBin & Cloudinary)
const CONFIG = {
    JSONBIN_BIN_ID: "6a878f98f5f4af5e292ef4d1",
    CLOUDINARY_CLOUD_NAME: "uhslxg9a",
    CLOUDINARY_API_KEY: "545648133778833"
};
