let userName = document.getElementById('userNameHome');
let logBtn = document.getElementById('logBtn');
let userData = {}

if (localStorage.getItem('userInfo') != null) {
    userData = localStorage.getItem('userInfo');
}

userNameHome.innerHTML = userData.toUpperCase('');

logBtn.addEventListener('click',function () {
    localStorage.removeItem('userInfo');
})

console.log(userData);