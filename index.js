var express = require('express');
var app = express();
const fetch = require('node-fetch');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

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

app.get('/politicy', function (req, res) {
    res.render('pages/politicy');
});

/* app.use (function (req, res, next){
    const token = req.cookies;
    try {
        const user = (token);
        req.user = user;
        next();
    } catch (err) {
        console.log('teste');
        res.clearCookie('token');
    }
}); */

app.get('/cart', function (req, res) {
    res.render('pages/cart');
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

app.get('/user', function (req, res) {
    res.clearCookie('token');
    res.render('pages/user');
});

app.listen(5500, () => {
    console.log('APP Online');
});
