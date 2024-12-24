const sellerImageModel = require("../Model/GetSellerImageDetatilsModel")

const GetSellerImageDetailController = async (req, res) => {
    try {
        const sellerImageData = await sellerImageModel.GetSellerImageDetatilsModel();

        if (!sellerImageData) {
            return res
              .status(401)
              .json({ header: { status: 401, message: "No Seller found" } });
          }
      
          const response = {
            header: { status: 200, message: "Seller Details " },
            data: sellerImageData,
          };
      
          return res.status(200).json(response);
        
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}
module.exports = {GetSellerImageDetailController}