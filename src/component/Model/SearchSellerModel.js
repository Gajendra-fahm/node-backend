const dbConnection = require("../../Config/db");

const searchSellers = async ({ search }) => {
  const query = `
    SELECT * FROM sellers 
      WHERE (sellername like $1 or selleremail like $1 or sellecity like $1 or sellertstate like $1)
    `;

  const values = [`%${search}%`];

  try {
    const result = await dbConnection.query(query, values);
    return result.rows;
  } catch (error) {
    throw new Error("Database query error");
  }
};

module.exports = { searchSellers };
