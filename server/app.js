const express = require("express");
// const nodemon = require("nodemon");
const path = require("path");
const middleware = express.static(path.join(__dirname, './../public'));
const app = express();
app.use(middleware);
let mysql = require('mysql');

// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123---',
//     database: 'DB'
// });


// connection.connect(function (error) {
//     if (error) throw error;
//     console.log('Connected to the MySQL server.');
// });



// // connection.connect(function (err) {
// //     if (err) {
// //         return console.error('error: ' + err.message);
// //     }

// //
// // });


// app.get("/url", (req, res, next) => {
//     connection.query('SELECT productID, product, price FROM Products', function (error, results, fields) {
//         if (error) throw error;
//         console.log(results);
//         res.send(results);
//     });

// });


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
