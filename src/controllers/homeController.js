const { getAllUser, updateUserId , deleteUser, findUser , createUser} = require('../sercives/CRUDService');

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
    await createUser(email,name);
    res.redirect('/'); 
}
const getUpdateUser = async (req, res) => {
    const id = req.params.id
    let results = await findUser(id);
    let user = results && results.length > 0 ? results[0] : {}; 
    return res.render('update.ejs',{user : user});
   
}
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let id = req.body.id;
    await updateUserId(email,name,id)
     res.redirect('/'); 
}

const destroyUser = async (req, res) => {
    let id = req.params.id;
    await deleteUser(id)
     res.redirect('/'); 
}

module.exports = {
    getHomepage,
    postCreateUser,
    getCreateUser,
    getUpdateUser,
    postUpdateUser,
    destroyUser
}