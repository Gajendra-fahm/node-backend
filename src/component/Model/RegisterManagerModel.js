const dbConnection = require("../../Config/db");

const RegisterManager = async (registerparameter) =>{
    const {managername, email, password, phono} = registerparameter;

    const id = Math.floor(Math.random() * 1000) +1

    const query =`insert into taskmanagers(id, managername, email, password, phono)
                values( $1,$2, $3, $4, $5)
               RETURNING *;

            `;
    const values = [id, managername, email, password, phono]

    const result = await dbConnection.query(query, values)
    return result.row[0]

}

module.exports = {RegisterManager}

