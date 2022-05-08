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
			console.log(user);
		})
		.catch((error) => {
			// console.log(error);
			var errorCode = error.code;
			var errorMessage = error.message;
			customToast("danger", errorMessage);
		});
};

const customToast = (color, msg) => {
	const liveToast = document.getElementById("liveToast");
	liveToast.classList.add("bg-" + color);
	document.querySelector(".toast-body").innerText = msg;
	const toast = new bootstrap.Toast(liveToast, { autohide: false });
	toast.show();
};

const tos = () => {
	console.log("tos");
	customToast("primary", "Terms of Service");
};
