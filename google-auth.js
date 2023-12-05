// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgpc3TV5ltVOLRtBgdiRcYYOzaUcSBMBI",
    authDomain: "fakbook--auth.firebaseapp.com",
    projectId: "fakbook--auth",
    storageBucket: "fakbook--auth.appspot.com",
    messagingSenderId: "649903079135",
    appId: "1:649903079135:web:50325a6fbba1b89794b36a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

const logIn = document.querySelector('#log-in');
const logOut = document.querySelector('#log-out');
const logInSection = document.querySelector('.log-in-section');

logIn.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            logInSection.style.top = '-100%';
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
});

logOut.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            console.log('User signed out successfully.');
            // You might want to redirect to a login page or update your UI accordingly.
        })
        .catch((error) => {
            // An error happened.
            console.error('Error signing out:', error);
        });
});
