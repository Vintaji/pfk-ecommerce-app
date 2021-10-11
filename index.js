var express = require('express');
var app = express();
const fetch = require('node-fetch')

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/cart', function (req, res) {
    res.render('pages/cart');
});

app.get('/register', function (req, res) {
    res.render('pages/register');
});

app.get('/login', function (req, res) {
    res.render('pages/login');
});

app.get('/admin', async function (req, res) {
    const response = await fetch('http://localhost:3001/balance', {
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJyaWNhcmRvLnNhbnRhbmFAbGlua2FwaS5jb20uYnIiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNjMzMDIzOTA5LCJqdGkiOiIyUjR5NHdaUS1tNWZiVEEyeF9qNkVWMnJ1dmsiLCJjbGllbnRfaWQiOiI1Rjl0YnNkSk1wZWVnVXh1In0.DbNucqpY-XVywIuGrBHJB6_hqHhCtYFGM4_1VuI_kfbCGAcqkZn2I1wuPnS90GFg8ShEoByQ3IPCj16ZGlNjjSdlVpNDdxm9v7G1xYfXh2j07qeYF0KgIYfVsDqu1TN9t9Yvxs_gI9n4WiIdt6115GxKDk4aHQv9z2iCSuIS71pktksj5eBFh6y-Tu7sYyPG0vbRPSb_DZGboDoKXFhxA6ZIFWGpKJ00DvN10PRwfVFxRWDj67Qt2Dwe3KNEpIqnU1Bx2-NOPNhrlZDhkVbjE0OjSY__u-MPbFasHH9_WLVLfG7IV5qCz0l1hyBarlPrt_vyrRJF4PbP7D1p6JyaWA`
        }
    })
    const data = await response.json()
    res.render('pages/admin', { balance: data });
});

app.get('/charges', function (req, res) {
    res.render('pages/charges');
});

app.get('/payment', function (req, res) {
    res.render('pages/payment');
});

app.listen(5500, () => {
    console.log('APP Online');
});
