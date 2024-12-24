const sqlProductsModel = require("../Model/SqlProductModel");

const SqlProductController = async (req, res) => {
  try {
    const productData = await sqlProductsModel.sqlProducts();
    if (!productData) {
      return res
        .status(401)
        .json({ header: { status: 401, message: "No Product found" } });
    }

    const response = {
      header: { status: 200, message: "Product Details " },
      data: productData,
    };

    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { SqlProductController };
