const express = require('express');
const { getAllUser,findUser,deleteUser,createUser,updateUser } = require('../controllers/api/userController');
const router = express.Router();

router.get('/user', getAllUser);
router.get('/user/:id', findUser);
router.delete('/delete-user/:id', deleteUser);
router.post('/create-user', createUser);
router.put('/update-user/:id', updateUser);

module.exports = router;
