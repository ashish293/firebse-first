// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import {
	getAuth,
	createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDgxAsFs1uapzSveW6joepmdDuGyBgVpHA",
	authDomain: "job-portal-a942c.firebaseapp.com",
	projectId: "job-portal-a942c",
	storageBucket: "job-portal-a942c.appspot.com",
	messagingSenderId: "812521115196",
	appId: "1:812521115196:web:d3f943addae32cca1cbd39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
console.log(auth);

const signup = (e) => {
	e.preventDefault();
	const username = document.getElementById("username");
	const password = document.getElementById("signupPassword");
	const email = document.getElementById("signupEmail");
	console.log(username.value, password.value, email.value);
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log(user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
};
