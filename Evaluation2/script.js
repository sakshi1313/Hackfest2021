/*var firebaseConfig = {
    apiKey: "AIzaSyC1ZmBrPVzZ8P4dS1DOrxQqJRr1NRZiQPc",
    authDomain: "fir-auth-5d1c0.firebaseapp.com",
    databaseURL: "https://fir-auth-5d1c0-default-rtdb.firebaseio.com",
    projectId: "fir-auth-5d1c0",
    storageBucket: "fir-auth-5d1c0.appspot.com",
    messagingSenderId: "1034180946217",
    appId: "1:1034180946217:web:3accd3521d5c6af7a5af38",

  };
  // Initialize Firebase
   firebase.initalizeApp(firebaseConfig);
   var firestore=firebase.firestore();
   var docRef=firestore.doc("users/");

   const auth = firebase.auth();
  
  var db = firebase.firestore();


var db = firebase.firestore();*/
var txtunamelogin = document.getElementById("uname-login");
var txtpswlogin = document.getElementById("psw-login");
var loginbtn = document.getElementById("loginbtn");
var txtemail = document.getElementById("email");
var txtpsword = document.getElementById("psword");
var txtusername = document.getElementById("username");
var txtpsword2 = document.getElementById("psword2");
var cancelbtn = document.getElementById("cancelbtn");
var signupbtn = document.getElementById("signupbtn");
var form = document.getElementById("form");

console.log("hello");

//loginbtn.addEventListener('click',(e)=>{
    // var psw=txtpswlogin.value;
    // var username=txtunamelogin.value;
    // var auth=firebase.auth();
     //var promise=auth.signInWithEmailAndPassword(username,psw);
    // promise.catch(e=>console.log(e.message));
     //window.location.replace("file:///C:/xampp/htdocs/web/college_petition_web/ROUGH-work/main.html");
 //});
//add signup event
//signupbtn.addEventListener('click',(e)=>{
function storedata() {
  const txtunamelogin = document.getElementById("uname-login");
 const txtpswlogin = document.getElementById("psw-login");
const loginbtn = document.getElementById("loginbtn");
const txtemail = document.getElementById("email");
const txtpsword = document.getElementById("psword");
const txtusername = document.getElementById("username");
const txtpsword2 = document.getElementById("psword2");
const cancelbtn = document.getElementById("cancelbtn");
const signupbtn = document.getElementById("signupbtn");
const form = document.getElementById("form");

  psw1 = txtpsword.value;
  username1 = txtusername.value;
  email = txtemail.value;
  psw2 = txtpsword2.value;
  auth = firebase.auth();
  // e.preventDefault();
   checkInputs();
   //const promise=auth.createUserWithEmailAndPassword(email,psw1);
   //promise.catch(e=>console.log(e.message));
  db.collection("users").add({
    Name: username1,
    Email: email,
    Password: psw1,
  })
    .then((docRef) => {
      console.log("Signed in successfully with id=", docRef.id);
      window.location.replace("file:///C:/xampp/htdocs/web/college_petition_web/ROUGH-work/main.html");
    })
    .catch((error) => {
      console.error("Error signing in");
    });

    window.location.replace("file:///C:/xampp/htdocs/web/college_petition_web/ROUGH-work/main.html");
};
//firebase.auth().onAuthStateChanged(firebaseUser=>{
    /*if(firebaseUser){
        console.log(firebaseUser);
    }else{
        console.log('not logged in');
    }*/
 //});

txtunamelogin = document.getElementById("uname-login");
txtpswlogin = document.getElementById("psw-login");
loginbtn = document.getElementById("loginbtn");
txtemail = document.getElementById("email");
txtpsword = document.getElementById("psword");
txtusername = document.getElementById("uname");
txtpsword2 = document.getElementById("psword2");
cancelbtn = document.getElementById("cancelbtn");
signupbtn = document.getElementById("signupbtn");
form = document.getElementById("form");
if (signupbtn) {
  signupbtn.addEventListener("click", function (e) {
    e.preventDefault();
    checkInputs();

  });
}
function checkInputs() {
  console.log("hello");
  psw = txtpswlogin.value.trim();
  username = txtunamelogin.value.trim();
  psw1 = txtpsword.value.trim();
  username1 = txtusername.value.trim();
  email = txtemail.value.trim();
  psw2 = txtpsword2.value.trim();


  if (email == "") {
    setErrorFor(txtemail, "email cannot be blank");
  }
  else if (!isEmail(email)) {
    setErrorFor(txtemail, "email not valid");
  }
  else {
    setSuccessFor(txtemail);
  }

  if (username1 == '') {
    setErrorFor(txtusername, "username cannot be blank");
  }
  else {
    setSuccessFor(txtusername);
  }

  if (psw1 == "") {
    setErrorFor(txtpsword, "password cannot be blank");
  }
  else {
    setSuccessFor(txtpsword);
  }

  if (psw2 == "") {
    setErrorFor(txtpsword2, "Please enter your password");
  }
  else if (psw1 == psw2) {
    setSuccessFor(txtpsword2);
  }
  else {
    setErrorFor(txtpsword2, "wrong password entered");
  }

}

function setErrorFor(input, message) {
  const inputcontainer = input.parentNode;
  const small = inputcontainer.querySelector('small');
  small.innerText = message;
  inputcontainer.className = 'input-container error';
}

function setSuccessFor(input) {
  const inputcontainer = input.parentElement;
  inputcontainer.className = 'input-container success';
}

function isEmail(email) {
  var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return re.test(email);
}

