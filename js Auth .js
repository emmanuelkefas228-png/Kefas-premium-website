import { app } from "./firebase.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const auth = getAuth(app);

window.login = function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth,email,password)
  .then(()=> window.location="dashboard.html")
  .catch(e=>alert(e.message));
}

window.signup = function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth,email,password)
  .then(()=> alert("Account created successfully!"))
  .catch(e=>alert(e.message));
}