
// Import the functions you need from the SDKs
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

// Select DOM elements
const logIn = document.querySelector('#log-in');
const logOut = document.querySelector('#log-out');
const logInSection = document.querySelector('.log-in-section');

// Check if user data is already in localStorage
const savedUser = localStorage.getItem('user');

if (savedUser) {
    // If user data is found, parse it and automatically log in
    const user = JSON.parse(savedUser);
    logInSection.style.top = '-100%';
}

// Event listener for login button
logIn.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // Extract user information
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            // Save user data to localStorage
            localStorage.setItem('user', JSON.stringify(user));

            // Hide login section
            logInSection.style.top = '-100%';
        })
        .catch((error) => {
            // Handle login errors
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // Handle errors accordingly
        });
});

// Event listener for logout button
logOut.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            // Remove user data from localStorage on logout
            localStorage.removeItem('user');
            console.log('User signed out successfully.');
            logInSection.style.top = '0';
            // Handle UI changes or redirection as needed
        })
        .catch((error) => {
            // Handle logout errors
            console.error('Error signing out:', error);
        });
});




