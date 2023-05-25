// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXWR7JBtDMyKg-T2mq5Y5Sd33XC0xH2gI",
    authDomain: "login-page-using-firebas-bba1a.firebaseapp.com",
    projectId: "login-page-using-firebas-bba1a",
    storageBucket: "login-page-using-firebas-bba1a.appspot.com",
    messagingSenderId: "646438694462",
    appId: "1:646438694462:web:c8fd65fe29e7e9f44d2b6f",
    measurementId: "G-QDZM7R3H3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const submitButton = document.getElementById('submit');
const signupButton = document.getElementById('sign-up');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const main = document.getElementById('main');
const createacct = document.getElementById('create-acct');

const signUpEmailIn = document.getElementById('email-signup');
const confirmSignUpEmailIn = document.getElementById('confirm-email-signup');
const signUpPasswordlIn = document.getElementById('password-signup');
const confirmSignUpPasswordIn = document.getElementById('confirm-password-signup');
const createacctbtn = document.getElementById('create-acct-btn');
const returnbtn = document.getElementById('return-btn');

var email, password, signUpEmail, signUpPassword, confirmSignUpEmail, confirmSignUpPassword;

createacctbtn.addEventListener("click", function () {
    var isVerified = true;

    // if signup email and confirm signup email are different
    signUpEmail = signUpEmailIn.value;
    confirmSignUpEmail = confirmSignUpEmailIn.value;
    if (signUpEmail != confirmSignUpEmail) {
        window.alert("Email fields do not match. Try again.");
        isVerified = false;
    }

    // if signup password and confirm signup password are different
    signUpPassword = signUpPasswordlIn.value;
    confirmSignUpPassword = confirmSignUpPasswordIn.value;
    if (signUpPassword != confirmSignUpPassword) {
        window.alert("Password fields do not match. Try again.");
        isVerified = false;
    }

    // if any value either email or password is null 
    if (signUpEmail == null || confirmSignUpEmail == null || signUpPassword == null || confirmSignUpPassword == null) {
        window.alert("Please fill out all required fields.");
        isVerified = false;
    }

    if (isVerified) {
        createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
            .then((userCredential) => {
                // signed in
                const user = userCredential.user;
                // ..
                window.alert("Success ! Account Created.");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                window.alert("Error occured. Try again.");
            });
    }
});

submitButton.addEventListener("click", function () {
    email = emailInput.value;
    console.log(email);
    password = passwordInput.value;
    console.log(password);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // signed in
            const user = userCredential.user;
            console.log("Success! Welcome Back!");
            window.alert("Success! Welcome Back!");
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error occured. Try again.");
            window.alert("Error occured. Try again.");
        });
});

signupButton.addEventListener("click", function () {
    main.style.display = "none";
    createacct.style.display = "block";
});

returnbtn.addEventListener("click", function () {
    main.style.display = "block";
    createacct.style.display = "none";
});
