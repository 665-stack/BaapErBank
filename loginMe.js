
document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //input and button handler
    if (userEmail == '') {
        alert('Please enter a email')
    }
    else if (userPassword == '') {
        alert('Please enter a password')
    }
    //submit btn handler; akhne jodi shorto ta true hoy taile amake arekta page e niye jabe;
    else if (userEmail == 'devil@mail.com' && userPassword == 'psd') {
        window.location.href = 'banking.html';
    }
    else {
        alert('user not found')
    }




})