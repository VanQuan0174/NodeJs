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
require('dotenv').config();
// import express from 'express' // es modules

const app = express() // app express
const port = process.env.PORT || 8386;// port => hardcode
const hostname = process.env.HOST_NAME;
//config tamplate engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs')

//config statics files
app.use(express.static(path.join(__dirname,'public')));


// khai báo route
app.get('/', (req, res) => {
  res.send('Hello World 123')
})

app.get('/abc', (req, res) => {
  // res.send('<h1>123<h1/>')
  res.render('sample.ejs')
})

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})