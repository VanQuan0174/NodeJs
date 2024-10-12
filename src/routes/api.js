const express = require('express');
const { getAllUser,findUser,deleteUser,createUser,updateUser } = require('../controllers/api/userController'); // Đảm bảo đường dẫn này là chính xác
const router = express.Router();

// Định nghĩa route cho API
router.get('/user', getAllUser);
router.get('/user/:id', findUser);
router.delete('/delete-user/:id', deleteUser);
router.post('/create-user', createUser);
router.put('/update-user/:id', updateUser);

module.exports = router;
