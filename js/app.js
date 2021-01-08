


/* var password = document.getElementById("pass")
var confirmpassword = document.getElementById("confirmpass"); */
/* 
function validatePassword(){
    if(password.value != confirmpassword.value) {
        confirmpassword.setCustomValidity("As senhas não coincidem!");
    } else {
        confirmpassword.setCustomValidity('');
    }
} */

document.getElementById('submit').onclick = function(){

    //validatePassword();

      name = document.getElementById('name').value
      email = document.getElementById('email').value
      pass = document.getElementById("pass").value
      confirmpass = document.getElementById("confirmpass").value

var xhttp = new XMLHttpRequest();
var url = "http://52.91.139.190/fsapi/users/auth/register-jwt";
xhttp.open("POST", url, true);
xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhttp.onload = function () {
    if (xhttp.readyState == 4 && xhttp.status == "200") {
        var users = JSON.parse(xhttp.responseText);
        console.log(users)
    } 
}
xhttp.send(JSON.stringify({
    "email": email,
    "name": name,
    "password": pass,
    "confirma_password": confirmpass
}))

event.preventDefault();

}








