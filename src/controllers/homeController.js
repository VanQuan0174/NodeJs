const connection = require('../config/database');

const { getAllUser } = require('../sercives/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUser();
    return res.render('home.ejs', {user : results});
   
}


const getCreateUser = (req, res) => {
    return res.render('create.ejs');
   
}
const postCreateUser = async (req, res)=> {
    let email = req.body.email;
    let name = req.body.name;
    
    let [results, fields] = await connection.query(
        `INSERT INTO users (email, name) VALUES (?,?)`, [email, name],
    );
}

module.exports = {
    getHomepage,
    postCreateUser,
    getCreateUser
}