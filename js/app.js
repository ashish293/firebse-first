// Utility
// custom toast
const customToast = (color, msg) => {
	const liveToast = document.getElementById("liveToast");
	liveToast.classList.add("bg-" + color);
	document.querySelector(".toast-body").innerText = msg;
	const toast = new bootstrap.Toast(liveToast, { autohide: false });
	toast.show();
};

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
const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp);

const auth = firebaseApp.auth();
console.log(auth);

// Signup
const signup = (e) => {
	e.preventDefault();
	const username = document.getElementById("username");
	const password = document.getElementById("signupPassword");
	const email = document.getElementById("signupEmail");
	console.log(username.value, password.value, email.value);
	firebase
		.auth()
		.createUserWithEmailAndPassword(email.value, password.value)
		.then((userCredential) => {
			// Signed in
			var user = userCredential.user;
			// ...
			username.value = "";
			password.value = "";
			email.value = "";
			customToast("success", "Signup Successful");
			const modalBtn = document.getElementById("closeSignupModal");
			modalBtn.click();
			console.log(user);
			cleanup();
		})
		.catch((error) => {
			// console.log(error);
			var errorCode = error.code;
			var errorMessage = error.message;
			customToast("danger", errorMessage);
		});
};

// Login
const login = (e) => {
	e.preventDefault();
	const email = document.getElementById("signinEmail");
	const password = document.getElementById("signinPassword");
	console.log(email.value, password.value);
	firebase
		.auth()
		.signInWithEmailAndPassword(email.value, password.value)
		.then((userCredential) => {
			// Signed in
			var user = userCredential.user;
			console.log(user);
			customToast("success", "Login Successful");
			email.value = "";
			password.value = "";
			const modalBtn = document.getElementById("closeLoginModal");
			modalBtn.click();
			cleanup();
			// ...
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			customToast("danger", errorMessage);
		});
};

// Logout
const logout = () => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			// Sign-out successful.
			customToast("success", "Logout Successful");
			cleanup();
		})
		.catch((error) => {
			// An error happened.
			customToast("danger", error.message);
		});
};

const tos = () => {
	console.log("tos");
	customToast("primary", "Terms of Service");
};

// cleanup
const cleanup = () => {
	firebase.auth().onAuthStateChanged((user) => {
		const navItems = document.querySelectorAll(".nav-item");
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			var uid = user.uid;
			// customToast("success", "User Signed In");
			// ...
			navItems[0].classList.add("d-none");
			navItems[1].classList.add("d-none");
			navItems[2].classList.remove("d-none");
		} else {
			// User is signed out
			// ...
			navItems[0].classList.remove("d-none");
			navItems[1].classList.remove("d-none");
			navItems[2].classList.add("d-none");
			// customToast("danger", "User Signed Out");
		}
	});
};

const loginWthGoogle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			customToast("success", "Login With Google Successful");
		})
		.catch((error) => {
			// Handle Errors here.
			customToast("danger", error.message);
		});
};
