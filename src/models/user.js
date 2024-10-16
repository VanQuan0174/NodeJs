const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Kết nối cơ sở dữ liệu

// Định nghĩa model User
const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false // Không cho phép null
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false // Không cho phép null
    },
    file: {
        type: DataTypes.STRING // Để lưu trữ tên file hoặc đường dẫn file
    }
}, {
    tableName: 'users', // Tên bảng trong cơ sở dữ liệu
    timestamps: false // Không tự động thêm createdAt và updatedAt
});

const UserModel = {
    getAll: async () => {
        return await User.findAll(); 
    },

    findById: async (id) => {
        return await User.findByPk(id); 
    },

    create: async (email, password, name, file) => {
        return await User.create({ email, password, name, file }); 
    },

    update: async (id, email, password, name , file) => {
        const user = await User.findByPk(id); 
        if (user) {
            user.email = email;
            user.name = name;
            user.password = password;
            if (file) { 
                user.file = file;  
            }
            await user.save();
        }
        return user; 
    },

    delete: async (id) => {
        const user = await User.findByPk(id); 
        if (user) {
            await user.destroy(); 
            return true;
        }
        return false; 
    }
};

module.exports = UserModel;