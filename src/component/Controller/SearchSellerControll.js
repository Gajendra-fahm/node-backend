const searchSellers = require("../Model/SearchSellerModel");

const searchSellerController = async (req, res) => {
  const { search } = req.body;

  // Extract headers from the request
  const headers = req.headers;

  const xUserId = headers['xuserid'];
  const xRandom = headers['xrandom'];
  const abc = headers['abc'];
  const xLanguage = headers['xlanguage'];
  const xDeviceInfo = headers['xdeviceinfo'];
 

  // Validate required headers
  if (!xUserId || !xRandom || !abc || !xDeviceInfo ||xLanguage ) {
    return res.status(400).json({
      header: { status: 400, message: "Bad Request" }
    });
  }
  

  try {
    const searchSeller = await searchSellers.searchSellers({ search });
    if(!search){
        return res
        .status(401)
        .json({ header: { status: 401, message: "Required parameter missing," } });
    }

    if (searchSeller.length === 0) {
      return res
        .status(402)
        .json({ header: { status: 401, message: "Seller Not found" } });
    }

    const response = {
      header: { status: 200, message: "Seller Details" },
      data: searchSeller,
    };

    return res.status(200).json(response);
  } catch (error) {
    console.log("error", error);
    return res
      .status(500)
      .json({ header: { status: 500, message: "Data Base Error " } });
  }
};

module.exports = { searchSellerController };
