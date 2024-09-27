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

const webRoutes = require('./routes/web');

const app = express() // app express
const port = process.env.PORT || 8386;// port => hardcode
const hostname = process.env.HOST_NAME;

//config tamplate engine
configViewEngine(app);

// khai báo routes
app.use('/', webRoutes);

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})