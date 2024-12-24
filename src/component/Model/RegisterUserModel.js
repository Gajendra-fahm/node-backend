const dbConnection = require("../../Config/db");

const registerUser = async (register) => {
  const {
    username,
    useremail,
    userpassword,
    mobile,
    address,
  } = register;

  const userid  = Math.floor(Math.random() * 1000) + 1;

  const query = `
            INSERT INTO REGISTERUSER (userid, username,useremail,userpassword, mobile,  address )	
            VALUES ($1, $2, $3, $4, $5, $6) 
            RETURNING *;
        `;

    const values =[userid ,username, useremail, userpassword, mobile, address]
    
    const result = await dbConnection.query(query, values);
    return result.rows[0];
};

module.exports = { registerUser };
