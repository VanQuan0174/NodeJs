const express = require('express');
const {getHomepage,getCreateUser,postCreateUser} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage)  
router.get('/create', getCreateUser)  
router.post('/create-user', postCreateUser) 


module.exports = router; // export default 