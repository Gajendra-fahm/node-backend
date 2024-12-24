const dbConnection = require("../../Config/db");

const sellerRegister = async (registerseller) => {
  const { sellermane, selleremail, mobile, selleraddress } = registerseller;

  const sellerid = Math.floor(Math.random() * 1000) + 1;

  const query = `insert into registersellers
        (sellerid, sellermane, selleremail, mobile, selleraddress )
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING *;
    `;

  const values = [sellerid, sellermane, selleremail, mobile, selleraddress];
  const result = await dbConnection.query(query, values);
  return result.rows[0];
};

module.exports = { sellerRegister };
