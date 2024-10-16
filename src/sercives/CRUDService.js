const User = require('../models/user'); 

// Lấy tất cả người dùng
const getAllUser = async () => {
    try {
        return await User.getAll(); 
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error; // Ném lỗi ra ngoài
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

module.exports = {
    getAllUser,
    findUser,
    createUser,
    updateUser,
    deleteUser
};
