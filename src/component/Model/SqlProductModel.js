const dbConnection = require("../../Config/db")

const sqlProducts = async() =>{
    const data = await dbConnection.query("select * from persons")
    
    return data.rows
}

module.exports = {sqlProducts}