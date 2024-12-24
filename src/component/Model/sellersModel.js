const dbConnection = require("../../Config/db")

const SellersDetails = async () => {
    const sellerData = await dbConnection.query("select * from sellers")

    return sellerData.rows
}

module.exports  = {SellersDetails}