const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repass = document.getElementById('repasswd');

form.addEventListener('submit', (e) => {
    console.log('work');
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const repassValue = repass.value.trim();
    console.log(passwordValue);
    console.log(repassValue);
    if (userNameValue === '') {
        setError(userName, "Username field cannot be blank")
    }
    else {
        setSuccess(userName)
    }
    if (emailValue === '') {
        setError(email, "Email field cannot be blank")
    }
    else {
        setSuccess(email)
    }
    if (passwordValue === '' || repassValue === '') {
        setError(password, "password field can't be empty");
        setError(repass, "password field can't be empty");
    }
    else if (passwordValue === repassValue) {
        setSuccess(password);
        setSuccess(repass);
    }
    else {
        setError(password, 'password does not match');
        setError(repass, 'password does not match');
    }
}

function setError(input, message) {
    const formCtrl = input.parentElement;
    const errMsg = formCtrl.querySelector('span')
    errMsg.innerText = message;
    formCtrl.className = 'form-ctrl error'
}
function setSuccess(input) {
    const formCtrl = input.parentElement;
    formCtrl.className = 'form-ctrl success'
}