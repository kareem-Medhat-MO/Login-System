let allUsers = [];
let loginForm = document.getElementById('loginForm');
let emailAndUser = document.getElementById('emailAndUser');
let loginPass = document.getElementById('loginPass');
let invalidAlert = document.getElementById('invalidAlert');
let successAlert = document.getElementById('successAlert');

if (localStorage.getItem('allUsers') != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
}

console.log(allUsers);

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('aaaaaaaaaaaaa');
    logIn();
})

function logIn() {
    let userData = {
        user: emailAndUser.value,
        email: emailAndUser.value,
        pass: loginPass.value,
    }
    if (IsUserExist(userData) == true) {
        successAlert.classList.replace('d-none', 'd-block');
        invalidAlert.classList.replace('d-block', 'd-none');
        emailAndUser.classList.remove('is-invalid');
        emailAndUser.classList.add('is-valid');
        loginPass.classList.remove('is-invalid');
        loginPass.classList.add('is-valid');
        setInterval(() => {
            window.location.href = '../home/index.html ';
        }, 3000);
    }
    else {
        invalidAlert.classList.replace('d-none', 'd-block');
        emailAndUser.classList.add('is-invalid');
        loginPass.classList.add('is-invalid');
    }
    console.log(userData);
}

function IsUserExist(userData) {
    for (let index = 0; index < allUsers.length; index++) {
        if ((allUsers[index].name.toLowerCase() == userData.user.toLowerCase() || allUsers[index].email.toLowerCase() == userData.email.toLowerCase()) && allUsers[index].pass == userData.pass) {
            console.log('valid');
            localStorage.setItem('userInfo', allUsers[index].name)
            return true;
        }
    }
}
