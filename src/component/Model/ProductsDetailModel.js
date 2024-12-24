const db = require("../../Config/db");

const productsDetails = async () => {
  const data =
    await db.query(`SELECT product.*, persons.firstname, persons.city, persons.address  
        FROM product
        JOIN persons ON  product.personid= persons.personid 
        `);
        console.log(data)
  return data.rows;
};
module.exports = { productsDetails };
