window.onload = () => {
    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault();

        let login = document.getElementById('login');
        let password = document.getElementById('password');

        let request = new XMLHttpRequest();
        request.open('POST', '/api/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({login: login.value, password: password.value}));
        request.addEventListener('load', () => {
            // request.response

            const jwtToken = JSON.parse(request.response).token;

            let request2 = new XMLHttpRequest();
            request2.open('GET', '/api/secure', true);
            request2.setRequestHeader('Authorization', `Bearer ${jwtToken}`);
            request2.send();
            request2.addEventListener('load', () => alert(request2.responseText));
        });
    })
};
