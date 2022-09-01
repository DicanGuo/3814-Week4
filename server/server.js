//used for routing
var express = require('express'); 
var app = express();

const path = require('path');
const http = require('http').Server(app);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist/week5/')))

//route for check inputs
app.post('/api/auth', (req,res)=>{
    let users = [
        {'username': 'dican', 'birthdate': '01/01/1991', 'age': '30', 'email': 'abc@com.au','password': '123', 'valid': false}, 
        {'username': 'guo', 'birthdate': '01/01/1991', 'age': '30', 'email': 'abc@com.au','password': '321', 'valid': false}, 
        {'username': 'guodican', 'birthdate': '01/01/1991', 'age': '30', 'email': 'abc@com.au','password': '1234567', 'valid': false}, 
    ]
    if (!req.body) {
        return res.sendStatus(400)
    }
    var customer = {};
    customer.username = req.body.username;
    customer.password = req.body.password;
    for (let i = 0; i < users.length; i ++){
        if (req.body.username == users[i].username && req.body.password == users[i].password){
            customer.valid = true;
        }
    }
    res.send(customer.username, customer.birthdate, customer.age, customer.email, customer.valid);
});

require('./route/api-login.js')(app, path);
require('./listen/js')(http);

