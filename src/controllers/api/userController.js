const userService = require('../../sercives/CRUDService'); 

const getAllUser = async (req, res) => {
    try {
        const results = await userService.getAllUser(); // Gọi service để lấy người dùng
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
const createUser = async (req, res) => {
    let email = req.body.email; 
    let name = req.body.name; 
    if (!email || !name) {
        return res.status(400).json({ message: 'Email và tên là bắt buộc' });
    }
    try {
        await userService.createUser(email, name) ; 
        return res.status(201).json({ message: 'Thêm người dùng thành công' });
    } catch (error) {
        console.error('Error creating user:', error);
        return  res.status(500).json({ message: 'Có lỗi xảy ra khi thêm người dùng' });
        
    }
}

const updateUser = async (req,res) => {
    let email = req.body.email;
    let name = req.body.name;
    let id = req.params.id;
    try{
        await userService.updateUserId(email,name,id)
        return res.status(200).json({message: 'sửa thành công'})
    }catch(error){
        console.error('Error creating user:', error);
        return  res.status(500).json({ message: 'Có lỗi xảy ra khi thêm người dùng' });
    }
}

module.exports = {
    getAllUser,findUser,deleteUser,createUser,updateUser
};