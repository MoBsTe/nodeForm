const express = require("express");
// const nodemon = require("nodemon");
const path = require("path");
const middleware = express.static(path.join(__dirname, './../public'));
const app = express();
app.use(middleware);
let mysql = require('mysql2');

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
    let sql = "INSERT INTO pizza (amount, pizzaType) VALUES (amount, Pizza_type)";
});



app.get("/orders", (req, res, next) => {
    connection.query('SELECT amount, pizzaType FROM pizza', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.status(200).json({ result: amount, result: pizzaType });
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
