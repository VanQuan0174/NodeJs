const express = require('express');
const {getHomepage,getCreateUser,postCreateUser,getUpdateUser,postUpdateUser, destroyUser} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage)  
router.get('/create', getCreateUser)  
router.post('/create-user', postCreateUser) 

router.get('/update/:id', getUpdateUser)  
router.post('/update-user/:id', postUpdateUser) 

router.get('/delete-user/:id', destroyUser) 




module.exports = router; // export default 