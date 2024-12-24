const dbConnection = require("../../Config/db");

const GetSellerImageDetatilsModel = async () => {
  const sellerImageData = await dbConnection.query(`     SELECT  
    s.sellerid,
    s.sellername, 
    s.selleraddress, 
    s.selleremail, 
    s.sellerphone, 
    s.sellecity, 
    img.filename, 
    img.path
    FROM sellers AS s
    LEFT JOIN images AS img ON s.sellerid = img.id;`
   );

   return sellerImageData.rows
};

module.exports = {GetSellerImageDetatilsModel}
