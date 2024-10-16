const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Kết nối cơ sở dữ liệu

// Định nghĩa model User
const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique : true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    file: {
        type: DataTypes.STRING 
    }
}, {
    tableName: 'users', 
    timestamps: false 
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
    },

    findOne: async (email) => {
        return await User.findOne(email); 
    },

};

module.exports = UserModel;