window.onload = () => {
    document.getElementById('submit').addEventListener('click',(e) => {
        e.preventDefault();

        let lastName = document.getElementById('lName');
        let firstName = document.getElementById('fName');
        let login = document.getElementById('login');
        let password = document.getElementById('password');

        let request = new XMLHttpRequest();
        request.open('POST', '/api/registration',true);
        request.setRequestHeader('Content-Type', 'application/json');
        // request.setRequestHeader('jwt', var_token);
        request.send(JSON.stringify({lastName: lastName.value, firstName: firstName.value, login:login.value, password:password.value}));
        request.addEventListener('load', () => {
            console.log(request.response);
        })
    });
};
