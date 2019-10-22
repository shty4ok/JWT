const express = require('express');
const jwt = require('jsonwebtoken');
const HTMLing = require('htmling');
const bodyParser = require('body-parser');

const app = express();
app.engine('html', HTMLing.express(__dirname + '/views/'));
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('static'));

app.post('/api/registration',  (req, res, next) => {

    let obj = {};
         obj.lastName = req.body.lastName;
         obj.firstName = req.body.firstName;
         obj.login = req.body.login;
         obj.password = req.body.password;
    console.dir(obj);
    res.send(obj);
});

app.get('/api/secure', verifyToken, (req, res) => {
    res.send(`Hello, my dear ${req.jwtPayload.login}`);
});

app.post( '/api/login', (req, res) => {
    let obj_verify = {
        firstName: 'al',
        lastName: 'al',
        login: 'al',
        password: 'al'
    };
    let objLogin = {};
    objLogin.login = req.body.login;
    objLogin.password = req.body.password;
    if (objLogin.login === obj_verify.login &&
        objLogin.password === obj_verify.password) {

        let token = jwt.sign(objLogin, 'secretCode');
        console.log(token);
        // res.setHeader('authorization', token);
        // res.redirect('https://ya.ru');
        res.json({token});
    }
});

function verifyToken(req, res, next) {
    // Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFsIiwicGFzc3dvcmQiOiJhbCIsImlhdCI6MTU3MTc0MjYxMH0.yOQUQ1qG-EUTGB-EHeLu5wzXdrg0T50_Ge4EgBkePJ8
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        try {
            req.jwtPayload = jwt.verify(bearerToken, 'secretCode');
            next();
        } catch (e) {
            res.sendStatus(403);
        }
        // Next middleware
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

app.listen(3000, () => {console.log('Server listening on 3000 port')});
