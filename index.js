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

app.post('/login', function (req, res) {
    res.render('pages/login');
});

app.get('/login', function (req, res) {
    res.render('pages/login');
});

app.get('/politicy', function (req, res) {
    res.render('pages/politicy');
});

/* app.get('/', function (req, res) {
    Product.find(function (err, products) {
        if(err)
            console.log(err);

        res.render('products');
    });
}); */

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

app.get('/admin', async function (req, res) {
    const response = await fetch('http://localhost:3001/balance', {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': 'Bearer'
        }
    });
    const data = await response.json();
    const order = await fetch('http://localhost:3001/orders', {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': 'Bearer'
        }
    });
    const orders = await order.json();
    res.render('pages/admin', { balance: data, orders: orders });
});

app.get('/cart', function (req, res) {
    res.render('pages/cart');
});

app.get('/payment', function (req, res) {
    res.render('pages/payment');
});

app.get('/order', function (req, res) {
    res.render('pages/order');
});

app.get('/account', function (req, res) {
    res.render('pages/account');
});

app.get('/adress', function (req, res) {
    res.render('pages/adress');
});

app.get('/user', function (req, res) {
    res.clearCookie('token');
    res.render('pages/user');
});

app.listen(5500, () => {
    console.log('APP Online');
});
