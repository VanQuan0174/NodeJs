const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine'); // Cấu hình view engine
const webRoutes = require('./routes/web'); // Routes cho web
const apiRoutes = require('./routes/api'); // Routes cho API
const connection = require('./config/database'); // Kết nối database
require('dotenv').config(); // Tải biến môi trường

const app = express();
const port = process.env.PORT || 8386; 
const hostname = process.env.HOST_NAME || 'localhost'; // Mặc định là localhost

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cấu hình template engine nếu cần
configViewEngine(app);

// Khai báo routes
app.use('/', webRoutes); // Routes cho web
app.use('/api', apiRoutes); // Đường dẫn cho API

// Khởi động server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
