const registerUserModel = require("../Model/registerModel");

const registerDetails = async (req, res) => {
    try {
      // console.log("registerUserModel", registerUserModel);
      const user = await registerUserModel.find();
     // console.log(user);
  
      // If no user found
      if (!user) {
        return res
          .status(401)
          .json({ header: { status: 401, message: "No user found" } });
      }
  
      // If everything is correct
  
      const responseData = {
        header: { status: 200, message: "User Details" },
        data: user,
      };
  
      return res.status(200).json(responseData);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports = { registerDetails };