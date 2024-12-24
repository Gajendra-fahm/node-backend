const productsDetailsModel = require("../Model/ProductsDetailModel")

const getProductsDetail = async (req, res) => {
    try {
      const user = await productsDetailsModel.productsDetails();
  
      const responseData = {
          header: { status: 200, message: "Product Details" },
          data: user,
        };
    
        return res.status(200).json(responseData);
      
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
module.exports={getProductsDetail} 
  