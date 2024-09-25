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


const express = require('express')
// import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World 123')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})