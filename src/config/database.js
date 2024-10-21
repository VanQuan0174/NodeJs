// config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Tải biến môi trường

// Tạo đối tượng Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', 
    port: process.env.DB_PORT, 
    // logging: false,
});

// Kiểm tra kết nối
// const testConnection = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Kết nối đến MySQL thành công!');
//     } catch (error) {
//         console.error('Không thể kết nối đến MySQL:', error);
//     }
// };

// testConnection(); // Gọi hàm kiểm tra kết nối

module.exports = sequelize; // Xuất đối tượng Sequelize
