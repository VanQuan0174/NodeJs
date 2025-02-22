const express = require('express');
const { getAllUser,findUser,deleteUser,createUser,updateUser,postLogin } = require('../controllers/api/userController');
const router = express.Router();

router.get('/user', getAllUser);
router.get('/user/:id', findUser);
router.delete('/delete-user/:id', deleteUser);
router.post('/create-user', createUser);
router.put('/update-user/:id', updateUser);

router.post('/login-user', postLogin);


module.exports = router;
