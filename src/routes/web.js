const express = require('express');
const {getHomepage,getCreateUser,postCreateUser,getUpdateUser,postUpdateUser, deleteUser} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage)  
router.get('/create', getCreateUser)  
router.post('/create-user', postCreateUser) 

router.get('/update/:id', getUpdateUser)  
router.post('/update-user/:id', postUpdateUser) 

router.get('/delete-user/:id', deleteUser) 




module.exports = router; // export default 