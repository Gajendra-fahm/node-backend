const dbConnection = require("../../Config/db");

const Image = {
    create: async (filename, path) => {
        const query = `
            INSERT INTO images (filename, path) 
            VALUES ($1, $2) 
            RETURNING *;
        `;

        const values = [filename, path];

        try {
            const result = await dbConnection.query(query, values);
            return result.rows[0];
        } catch (err) {
            throw new Error(`Failed to insert image: ${err.message}`);
        }
    },
  
};

module.exports = Image;
