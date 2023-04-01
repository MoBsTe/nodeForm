const express = require("express");
// const nodemon = require("nodemon");
const path = require("path");
const middleware = express.static(path.join(__dirname, './../public'));
const app = express();
app.use(middleware);
app.use(express.json());
let mysql = require('mysql');
const { response } = require("express");

let connection = mysql.createConnection({
    host: '172.22.48.1',
    user: 'Valery2',
    password: 'Mysql123123123!',
    database: 'pizzadb'
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});



app.post("/order", (req, res, next) => {
    let post = { amount: req.body.amount, pizzaType: req.body.pizzaType };

    // let today = new Date();
    // let now = today.toLocaleString();

    connection.query('INSERT INTO pizza SET ?', post, function (error, result, fields) {
        if (error) throw err;
        console.log("1 record inserted");
    })
});



app.get("/orders", (req, res, next) => {
    connection.query('SELECT pizzaType, amount, DataAndTime FROM pizza', function (error, results, fields) {
        if (error) throw error;
        res.status(200).json(results);
        console.log(results);
    });

});



const port = process.env.PORT || 3000;
app.listen(port, (error) => {

    if (error) {
        console.log('[ERROR] Error start server. \r\n' + error);
        return;
    }
    if (process.env.NODE_ENV === 'production') {
        console.log('[INFO] Server start listening on ' + process.env.HOST_PROD);
    } else {
        console.log('[INFO] Server start listening on localhost:' + port);
    }
    console.log('[INFO] Node environment: ' + process.env.NODE_ENV);
});
