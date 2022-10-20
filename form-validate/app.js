const form = document.querySelector('.form');
const errorMsg = document.querySelectorAll('.error');
const failureIcon = document.querySelectorAll('.failure-icon');
const successIcon = document.querySelectorAll('.success-icon');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');


let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }

    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
});