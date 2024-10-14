const connection = require("../config/database");

const getAllUser = async () => {
    let [results] = await connection.query('SELECT * FROM users');
    return results ;
}
const findUser = async (id) => {
    let [results, fields] = await connection.query('SELECT * FROM users WHERE id = ?', [id]);
    return results;
}
const createUser = async (email, name, file) => {
    let [results, fields] = await connection.query(
        `INSERT INTO users (email, name, file) VALUES (?, ?, ?)`, [email, name, file]
    );
};
const deleteUser = async (id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM users WHERE id=?`,[id]
    );
}
const updateUserId = async (email, name, id) => {
    let [results, fields] = await connection.query(
        `UPDATE users SET email=?, name=? WHERE id=? `, [email, name, id]
    );
}


module.exports = {
    getAllUser,
    updateUserId,
    deleteUser,
    findUser,
    createUser
}
