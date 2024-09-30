// const { createServer } = require('node:http');
// const hostname = 'localhost'; //localhost
// const port = 3000; 

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express') // commonjs
const path = require('path');
const configViewEngine = require('./config/viewEngine');
require('dotenv').config();

const mysql = require('mysql2');

const webRoutes = require('./routes/web');

const app = express() // app express
const port = process.env.PORT || 8386;// port => hardcode
const hostname = process.env.HOST_NAME;

//config tamplate engine
configViewEngine(app);

// khai báo routes
app.use('/', webRoutes);

// test connection
// create the connection to database
const connection = mysql.createConnection({
  host : 'localhost',
  port : '3307',
  user : 'root', //default : empty
  password : '123456',
  database : 'nodejs'
});

//simple query
connection.query(
  'SELECT * FROM Users u',
  function (err, results, fields) {
    console.log(">>results",results);
    console.log(">>fields",fields);
  }
);


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})