const dbConnection = require("../../Config/db");

const SendNotification = async(SendNotification) => {
 
  const {notificationid, title, description, openlink } = SendNotification;

  const query = `insert into sendnotification
        (notificationid, title, description, openlink )
        VALUES ($1, $2, $3, $4) 
        RETURNING *;
    `;

    const values =[notificationid, title, description, openlink ]
    const result = await dbConnection.query(query, values);
    return result.rows[0];
};

module.exports = { SendNotification };


