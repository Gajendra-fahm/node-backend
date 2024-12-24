const sellerModel = require("../Model/sellersModel")

const sqlSellerControler = async (req, res) => {
    try {
        const sellerData = await sellerModel.SellersDetails();

        if (!sellerData) {
            return res
              .status(401)
              .json({ header: { status: 401, message: "No Seller found" } });
          }
      
          const response = {
            header: { status: 200, message: "Seller Details " },
            data: sellerData,
          };
      
          return res.status(200).json(response);
        
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}
module.exports = {sqlSellerControler}