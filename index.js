var express = require('express');
var app = express();
const fetch = require('node-fetch');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/register', function (req, res) {
    res.render('pages/register');
});
app.post('/register', function (req, res) {
    res.render('pages/register');
});
app.post('/login', function (req, res) {
    res.render('pages/login');
});

app.get('/login', function (req, res) {
    res.render('pages/login');
});

app.get('/admin', async function (req, res) {
    const response = await fetch('http://localhost:3001/balance', {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': 'Bearer'
        }
    });
    const data = await response.json();
    res.render('pages/admin', { balance: data });
});

app.get('/user', async function (req, res) {
    const response = await fetch('http://localhost:3001/login', {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': 'Bearer'
        }
    });
    const data = await response.json();
    res.render('pages/user', { balance: data });
});

app.get('/charges', function (req, res) {
    res.render('pages/charges');
});

app.get('/payment', function (req, res) {
    res.render('pages/payment');
});

app.get('/cart', function (req, res) {
    res.render('pages/cart');
});

app.listen(5500, () => {
    console.log('APP Online');
});
