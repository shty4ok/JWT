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

app.get('/api/registration', (req, res) => {
    res.render('registration');
})

app.listen(3000, () => {console.log('Server listening on 3000 port')});
