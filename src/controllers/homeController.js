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
    res.send("thêm thành công");
}
const getUpdateUser = async (req, res) => {
    const userId = req.params.id
    let [results, fields] = await connection.query('SELECT * FROM users WHERE id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {}; 
    return res.render('update.ejs',{user : user});
   
}
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let id = req.body.id;
    
    let [results, fields] = await connection.query(
        `UPDATE users SET email=?, name=? WHERE id=? `, [email, name, id]
    );
     res.redirect('/'); 
}

const deleteUser = async (req, res) => {
    let id = req.params.id;
    let [results, fields] = await connection.query(
        `DELETE FROM users WHERE id=?`,[id]
    );
     res.redirect('/'); 
}

module.exports = {
    getHomepage,
    postCreateUser,
    getCreateUser,
    getUpdateUser,
    postUpdateUser,
    deleteUser
}