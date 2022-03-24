const password = document.getElementById('password');
const rePassword = document.getElementById('rePassword');
form.addEventListener('submit', e => {
    var passwordValue = password.value;
    var rePasswordValue = rePassword.value;
    if (passwordValue != rePasswordValue) {
        alert('Password missmatch.\nPlease try again.')
        e.preventDefault();
    } else {

    }
});


var myElem = document.getElementById('menu-id');

myElem.onclick = function() {
    toggleMenu();
}


function toggleMenu() {
    var myMenu = document.getElementById('menu-nav-id');
    var displaySetting = myMenu.style.display;
    var menuButton = document.getElementById('menu-id');
    if (displaySetting == 'block') {
        myMenu.style.display = 'none';

    } else {
        myMenu.style.display = 'block';

    }
}