window.onload = () => {
    // document.getElementById('submit').addEventListener('click',(e) => {
    //     e.preventDefault();
    //
    //     let request = new XMLHttpRequest();
    //     request.open('POST', '/api/enter',true);
    //     request.setRequestHeader('Content-Type', 'application/json');
    //     request.addEventListener('load', ()=> {
    //     let login = document.getElementById('login');
    //     let password = document.getElementById('password');
    //
    //     })
    //     request.send(JSON.stringify({}));
    // })
    document.getElementById('registration').addEventListener('click', (e) => {
        e.preventDefault();

        let request = new XMLHttpRequest();
        request.open('GET', '/api/registration', true);
        request.send();
    })
}
