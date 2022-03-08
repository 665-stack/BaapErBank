
document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //submit btn handler; akhne jodi shorto ta true hoy taile amake arekta page e niye jabe;
    if (userEmail == 'devil@mail.com' && userPassword == 'psd') {
        window.location.href = 'banking.html';
    }
})