window.onload = () => {
    document.getElementById('submit').addEventListener('click',(e) => {
        e.preventDefault();

        let request = new XMLHttpRequest();
        request.open('POST', '/',true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener('load', ()=> {

        })
        request.send(JSON.stringify({}));
    })
}