let signUpForm = document.getElementById("registerForm");
let userName = document.getElementById("signUserName");
let eMail = document.getElementById("signEmail");
let password = document.getElementById("signPassword");
let confirmPassword = document.getElementById("signPassConfirm");
let userNameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let existAlert = document.getElementById("existAlert");
let successAlert = document.getElementById("successAlert");
let passwordAlert = document.getElementById("passwordAlert");
let passwordConfirmAlert = document.getElementById("passwordConfirmAlert");

let allUsers = [];

if (localStorage.getItem('allUsers') != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
}


signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (areAllInputsValid()) {
        addUser();
    }

})

function validataInput(Regex, element, alertId) {
    const pattern = Regex;
    if (pattern.test(element.value)) {
        console.log('valid');
        alertId.classList.replace('d-block', 'd-none');
        element.classList.remove('is-invalid');
        element.classList.add('is-valid');
        return true;
    }
    else {
        console.log('invalid');
        alertId.classList.replace('d-none', 'd-block');
        element.classList.add('is-invalid');
        return false;
    }
}


function validMatch(firstelement, secondelement, alertId) {
    if (firstelement.value == secondelement.value) {
        console.log('valid');
        alertId.classList.replace('d-block', 'd-none')
        secondelement.classList.remove('is-invalid');
        secondelement.classList.add('is-valid');
        return true;
    }
    else {
        console.log('invalid');
        alertId.classList.replace('d-none', 'd-block')
        secondelement.classList.add('is-invalid');
        return false;
    }
}


function areAllInputsValid() {
    if (validataInput(/^[a-zA-Z0-9$_]{2,}$/, userName, userNameAlert) == true &&
        validataInput(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, eMail, emailAlert) == true &&
        validataInput(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, password, passwordAlert) == true &&
        validMatch(password, confirmPassword, passwordConfirmAlert) == true) {
        console.log('all inputs are valid');
        return true;
    }
    else {
        console.log('Somthing went wrong');
        return false;
    }
}


function addUser() {
    var newUser = {
        name: userName.value,
        email: eMail.value,
        pass: password.value
    }
    if (isAlreadyExist(newUser) == true) {
        console.log("Already Exist");
        existAlert.classList.replace('d-none','d-block')
    } else {
        existAlert.classList.replace('d-block','d-none')
        successAlert.classList.replace('d-none','d-block')
        setTimeout(function name(params) {
            window.location.href='../login/index.html';
        },3000);
        allUsers.push(newUser)
        console.log(allUsers);
        localStorage.setItem('allUsers', JSON.stringify(allUsers))
    }
    function isAlreadyExist(newUser){
        for (var i = 0; i < allUsers.length; i++) {

            if (allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()) {
                console.log('Email Is Already Exist');
                return true
            }
        }
    }
}

