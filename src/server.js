const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8386; 
const hostname = process.env.HOST_NAME;

// Middleware cấu hình
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cấu hình template engine
configViewEngine(app);

// Khai báo routes
app.use('/', webRoutes);

// Khởi động server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
