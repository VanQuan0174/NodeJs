const { getAllUser, updateUserId , deleteUser, findUser , createUser} = require('../sercives/CRUDService');
const multer = require('multer');
const path = require('path');

const getHomepage = async (req, res) => {
    let results = await getAllUser();
    return res.render('home.ejs', {user : results});
   
}
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
        // Kiểm tra lỗi upload
        if (err) {
            console.error('Error uploading file:', err);
            return res.status(500).send('Error uploading file.');
        }

        // Lấy email, name từ body và file từ req.file
        let email = req.body.email;
        let name = req.body.name;
        let file = req.file ? req.file.filename : null;

        // Kiểm tra xem email và name có null không
        if (!email || !name) {
            return res.status(400).send('Email and Name are required.');
        }

        try {
            await createUser(email, name, file); // Gọi hàm tạo người dùng
            res.redirect('/'); // Chuyển hướng về trang chủ
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).send('Internal Server Error');
        }
    });
};
const getUpdateUser = async (req, res) => {
    const id = req.params.id
    let results = await findUser(id);
    let user = results && results.length > 0 ? results[0] : {}; 
    return res.render('update.ejs',{user : user});
   
}
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let id = req.body.id;
    await updateUserId(email,name,id)
     res.redirect('/'); 
}

const destroyUser = async (req, res) => {
    let id = req.params.id;
    await deleteUser(id)
     res.redirect('/'); 
}

module.exports = {
    getHomepage,
    postCreateUser,
    getCreateUser,
    getUpdateUser,
    postUpdateUser,
    destroyUser
}