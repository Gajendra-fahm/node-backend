const loginUserModel = require("../Model/LoginUserModel");

const logingUserController = async (req, res) => {
  try {
    const { useremail, userpassword } = req.body;

    // Basic validation
    if (!useremail || !userpassword) {
      return res
        .status(400)
        .json({ header: { status: 400, message: "Invalid email or password" } });
    }

    const users = await loginUserModel.loginUser();

    // Find user by email
    const user = users.find((user) => user.useremail === useremail);
    

    // If no user found
    if (!user) {
      return res
        .status(401)
        .json({ header: { status: 401, message: "No user found" } });
    }

    // Validate password
    if (user.userpassword === userpassword) {
      return res.status(200).json({
        header: { status: 200, message: "Login successful" },
      });
    } else {
      return res
        .status(401)
        .json({ header: { status: 401, message: "Invalid password" } });
    }
  } catch (error) {
    return res.status(500).json({ header: { status: 500, message: "Server error" } });
  }
};

module.exports = { logingUserController };
