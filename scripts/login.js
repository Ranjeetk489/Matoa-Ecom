const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleInputs();
})

function handleInputs() {
    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();
    if (usernameVal === '') {
        setError(username, "Username field cannot be blank");
    }
    else {
        setSuccess(username);
    }
    if (passwordVal === '') {
        setError(password, "password field cannot be blank");
    }
    else {
        setSuccess(password);
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