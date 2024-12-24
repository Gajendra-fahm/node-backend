const orderDetailModel = require("../Model/orderModel")

const orderController = async (req, res) => {
    try {
        const orderDetails = await orderDetailModel.find();

        //check if no order
        if (!orderDetails) {
            return res
              .status(401)
              .json({ header: { status: 401, message: "No order found" } });
          }

          const responseData = {
            header: { status: 200, message: "Orders Detail" },
            data: orderDetails,
          };
      
          return res.status(200).json(responseData);
      
    } catch (error) {
        //console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const ordersearchController = async (req, res) => {
   
    try {
        const { orderid, personname } = req.body;

        // Create a query object based on provided search parameters
        let query = {};
        if (orderid) {
            query.orderid = parseInt(orderid, 10); 
        }
        if (personname) {
            query.personname = personname
        }

        const orderDetails = await orderDetailModel.find(query);

        // Check if no order found
        if (!orderDetails || orderDetails.length === 0) {
            return res
                .status(404)
                .json({ header: { status: 404, message: "No order found" } });
        }

        const responseData = {
            header: { status: 200, message: "Orders Detail" },
            data: orderDetails,
        };

        return res.status(200).json(responseData);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {orderController, ordersearchController}