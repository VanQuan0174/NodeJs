const connection = require("../config/database");

const getAllUser = async () => {
    let [results, fields] = await connection.query('SELECT * FROM users');
    return results ;
}

module.exports = {
    getAllUser
}
