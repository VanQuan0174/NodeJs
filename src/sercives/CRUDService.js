const User = require('../models/user'); 

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Lấy tất cả người dùng
const getAllUser = async () => {
    try {
        return await User.getAll(); 
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error; 
    }
};

// Tìm người dùng theo ID
const findUser = async (id) => {
    try {
        return await User.findById(id); 
    } catch (error) {
        console.error('Error finding user:', error);
        throw error;
    }
};

// Tạo người dùng mới
const createUser = async (email, password, name, file) => {
    try {
        const checkEmail = await User.findOne({ where: { email } });
        if (checkEmail) {
            throw new Error('Email đã tồn tại');
        }
        return await User.create(email, password, name, file); 
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// Cập nhật thông tin người dùng theo ID
const updateUser = async (id, email, password, name, file) => {
    try {
        return await User.update(id, email,password, name, file); 
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

// Xóa người dùng theo ID
const deleteUser = async (id) => {
    try {
        return await User.delete(id); 
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

const loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new Error('Người dùng không tồn tại , email không chính xác');
        }

        if (user.password !== password) {
            throw new Error('Mật khẩu không chính xác');
        }
        const token = jwt.sign(
            { id: user.id, email: user.email }, // Payload của token
            process.env.JWT_SECRET, 
            { expiresIn: '1h' } 
        );
        return {token};
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllUser,
    findUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser
};
