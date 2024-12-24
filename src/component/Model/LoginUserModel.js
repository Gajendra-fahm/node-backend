const dbConnection = require("../../Config/db");

const loginUser = async () => {
    const data = await dbConnection.query("select * from REGISTERUSER");

    return data.rows
}

module.exports = {loginUser}