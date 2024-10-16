const userService = require('../sercives/CRUDService');
const multer = require('multer');
const path = require('path');

// Lấy trang chủ
const getHomepage = async (req, res) => {
    try {
        let results = await userService.getAllUser();
        return res.render('home.ejs', { user: results });
    } catch (error) {
        return res.send('thất bại lỗi');
    }
}

// Lấy trang tạo người dùng
const getCreateUser = (req, res) => {
    return res.render('create.ejs');
}

// Cấu hình storage cho multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images')); // Thay đổi đường dẫn theo ý muốn
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Tạo tên file duy nhất
    }
});

// Tạo middleware upload
const upload = multer({ storage: storage }).single('file');

// Hàm postCreateUser sử dụng middleware upload
const postCreateUser = (req, res) => {
    upload(req, res, async (err) => {

        let email = req.body.email;
        let name = req.body.name;
        let password = req.body.password;
        let file = req.file ? req.file.filename : null;

        // Kiểm tra xem email và name có null không
        if (!email || !name || !password) {
            return res.status(400).send('Email, password, and Name are required.');
        }

        try {
            await userService.createUser(email, password, name, file); 
            res.redirect('/'); 
        } catch (error) {
            res.send('thất bại');
        }
    });
};

// Lấy trang cập nhật người dùng
const getUpdateUser = async (req, res) => {
    const id = req.params.id;
    try {
        let results = await userService.findUser(id);
        let user = results ? results : {}; 
        return res.render('update.ejs', { user: user });
    } catch (error) {
        console.error('Error fetching user:', error);
        return res.send('thất bại');
    }
}

const postUpdateUser = (req, res) => {
    upload(req, res, async (err) => {

        let email = req.body.email;
        let name = req.body.name;
        let password = req.body.password;
        let id = req.body.id;
        let file = req.file ? req.file.filename : null; 

        try {
            await userService.updateUser(id, email, password, name, file); 
            res.redirect('/'); 
        } catch (error) {
            res.send('thất bại');
        }
    });
};

// Xóa người dùng
const destroyUser = async (req, res) => {
    let id = req.params.id;

    try {
        await userService.deleteUser(id);
        res.redirect('/'); 
    } catch (error) {
        res.send('thất bại');
    }
};

// Lấy trang đăng nhập
const getLogin = async (req, res) => {
    return res.render('login.ejs');
}

// Xuất các hàm
module.exports = {
    getHomepage,
    getCreateUser,
    postCreateUser,
    getUpdateUser,
    postUpdateUser,
    destroyUser,
    getLogin
}
