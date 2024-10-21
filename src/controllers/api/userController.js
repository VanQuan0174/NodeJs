const userService = require('../../sercives/CRUDService'); 
const jwt = require('jsonwebtoken');

const getAllUser = async (req, res) => {
    try {
        const results = await userService.getAllUser(); 
        return res.status(200).json(results); // Trả về kết quả dưới dạng JSON
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Có lỗi xảy ra khi lấy dữ liệu người dùng' });
    }
};

const findUser = async(req, res) => {
    const id = req.params.id;
    try{
        const results = await userService.findUser(id); 
        if (results.length === 0) {
            return res.status(404).json({ message: 'Người dùng không tồn tại' }); 
        }
        return res.status(200).json(results);   
    }catch (erorr){
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Có lỗi xảy ra khi lấy dữ liệu người dùng' });
    }
}
const deleteUser = async(req, res) => {    
    try{
        const id = req.params.id;
        await userService.deleteUser(id);
        return res.status(201).json({message : 'xóa thành công người dùng'});
    }catch (error){
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Có lỗi xảy ra khi lấy dữ liệu người dùng' });
    }
}
const createUser = async (req, res ) => {
    let email = req.body.email; 
    let name = req.body.name;
    let password = req.body.password;
    let file = req.body.file 
    if (!email || !password ) {
        return res.status(400).json({ message: 'Email và password là bắt buộc' });
    }
    try {
        await userService.createUser(email, password, name, file) ; 
        return res.status(201).json({ message: 'Thêm người dùng thành công' });
    } catch (error) {
        if (error.message === 'Email đã tồn tại') {
            return res.status(400).json({ message: 'Email đã tồn tại.' });
        }
        return  res.status(500).json({ message: 'Có lỗi xảy ra khi thêm người dùng' , error});
        
    }
}

const updateUser = async (req,res) => {
    let email = req.body.email;
    let name = req.body.name;
    let password = req.body.password;
    let file = req.body.file;
    let id = req.params.id;
    try{
        await userService.updateUser(id, email, password, name, file)
        return res.status(200).json({message: 'sửa thành công'})
    }catch(error){
        console.error('Error creating user:', error);
        return  res.status(500).json({ message: 'Có lỗi xảy ra khi thêm người dùng' });
    }
}

const postLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    try {
        const { token } = await userService.loginUser(email, password);
        res.status(200).json({
            message: 'Đăng nhập thành công',
            token: token, 
        });
    } catch (error) {
        return res.status(401).json({ message: 'Đăng nhập thất bại', error: error.message });
    }
}; 


module.exports = {
    getAllUser,findUser,deleteUser,createUser,updateUser,postLogin
};