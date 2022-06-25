alert("Auth Working");

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
const auth = getAuth();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    location.replace("index.html");
  }
});


function login() {
   alert("work")
  const email = document.getElementById("emailBox").value;
  const password = document.getElementById("passwordBox").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function signUp() {
  let email = document.getElementById("emailBox").value;
  let password = document.getElementById("passwordBox").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("User SignUP");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode + errorMessage);
    });
}
