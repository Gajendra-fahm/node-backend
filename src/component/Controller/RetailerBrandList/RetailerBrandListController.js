const retailerBrandDataMdel = require("../../Model/RetaierBrandList/RetailerBrandListModel");

const retailerBrandListController = async (req, res) => {
  try {
    const { retailerid } = req.body;

    const retailerBrandList = await retailerBrandDataMdel.retailerBrandList({
      retailerid,
    });

    if (!retailerBrandList || retailerBrandList.length === 0) {
      return res
        .status(401)
        .json({ header: { status: 401, message: "No Brand found" } });
    }

    const response = {
      header: { status: 200, message: "Brands Details " },
      data: retailerBrandList,
    };

    return res.status(200).json(response);
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
};
module.exports = { retailerBrandListController };
