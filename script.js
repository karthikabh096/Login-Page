
let email = "user@gmail.com";
let password = "12345";

localStorage.setItem("email", email);
localStorage.setItem("password", password);

function login() {

    let e = document.getElementById("email").value;
    let p = document.getElementById("password").value;

    if (e == localStorage.getItem("email") &&
        p == localStorage.getItem("password")) {

        document.getElementById("result").innerHTML =
        "Login Successful";

    } else {

        document.getElementById("result").innerHTML =
        "Invalid Email or Password";
    }
}
