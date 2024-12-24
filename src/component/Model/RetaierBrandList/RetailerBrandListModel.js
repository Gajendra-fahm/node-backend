const conntectdb = require("../../../Config/db");

const retailerBrandList = async ({ retailerid }) => {
  try {
    let query;
    let values = [];

    if (retailerid === 0) {
      // If retailerid is 0, select all brands
      query = `
        SELECT brandid, brandname
        FROM masterbrands
      `;
    } else {
      // Otherwise, select brands for the specific retailer
      query = `
        SELECT mb.brandid, mb.brandname
        FROM masterbrands mb
        JOIN retailer_brands rb ON mb.brandid = rb.brandid
        JOIN masterretailers mr ON rb.retailerid = mr.retailerid
        WHERE mr.retailerid = $1
      `;
      values = [retailerid];
    }

    // Execute the query (with values for parameterized query if needed)
    const retailerBrandData = await conntectdb.query(query, values);
    return retailerBrandData.rows;
  } catch (error) {
    throw error;
  }
};
module.exports = { retailerBrandList };
