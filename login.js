//Al clickar el botóncambia el tipo del input para mostrar o no la contraseña
function showpass() {
  var x = document.getElementById("password_field");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
//Lo mismo que showpass pero para el otro form
function showpass2() {
  var y = document.getElementById("passr");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}
//Para mostrar el panel de registrarse
function switchpanel() {
    document.getElementById("registrar").style.display = "block";
    document.getElementById("login_div").style.display = "none";
}
//Para mostrar el panel de loguearse
function switchpanel2() {
    document.getElementById("registrar").style.display = "none";
    document.getElementById("login_div").style.display = "block";
}
//Ver usuario activo
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("current").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    var user = firebase.auth().currentUser;
    if(user != null){
      var email_id = user.email;    
      document.getElementById("user_para").innerHTML = "Bienvenido usuario : " + email_id;
      document.getElementById("inicio").innerHTML = "Estas logueado: " + email_id;
    }
  } else {
    // No user is signed in.
     document.getElementById("user_div").style.display = "none";
 document.getElementById("current").style.display = "block";
    document.getElementById("login_div").style.display = "block";
  }
});
function current() {
   var email_data = user.email;
  var correo = firebase.auth().currentUser; 
  return email_data;
}

//Guardar valores del login

function login(){
  var userEmail = document.getElementById("email_field").value;
  var password = document.getElementById("password_field").value; 
  firebase.auth().signInWithEmailAndPassword(userEmail, password).catch(function(error) {
  // Handle Errors here. Para lo de formateo incorrecto y esas cosas
  var errorCode = error.code;
  var errorMessage = error.message;
   window.alert("Error: " + errorMessage);
  // ...
});
}

function logout(){
  firebase.auth().signOut();
  document.getElementById("inicio").innerHTML = "No estas logueado";
}
function registrar(){
  var email = document.getElementById("emailr").value;
  var pass = document.getElementById("passr").value; 
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
   window.alert("Error: " + errorMessage);
  // ...
});
}


