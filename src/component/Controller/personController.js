const personDetailsModel = require("../Model/personModel");

const bcrypt = require("bcrypt");

const personController = async (req, res) => {
  const { personname, email, mobile, password } = req.body;

  //basic validation
  if (!personname || !email || !mobile || !password) {
    return res.status(400).json({ message: "required parameter mission" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newPersonDetail = new personDetailsModel({
      personname,
      email,
      mobile,
      password: hashedPassword,
    });

    const newPersonAdded = await newPersonDetail.save();
    // console.log(newPersonAdded)

    return res
      .status(200)
      .json({ message: "person detail added successfully" });
  } catch (error) {
    //console.error(error)
    return res.status(500).json({ message: "Internal server error" });
  }
};

const loginPerson = async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res
      .status(404)
      .json({ header: { status: 404, message: "Invalid email" } });
  }

  try {
    // Check if a user with the provided email exists
    const user = await personDetailsModel.findOne({ email });

    // If no user found
    if (!user) {
      return res
        .status(401)
        .json({ header: { status: 401, message: "No user found" } });
    }
    // Compare encrypted password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // If everything is correct

    const responseData = {
      header: { status: 200, message: "Login successfully" },
      data: [user],
    };

    return res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getPersonDetails = async (req, res) => {
  try {
    console.log("personDetailsModel", personDetailsModel);
    const user = await personDetailsModel.find();
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

module.exports = { personController, loginPerson, getPersonDetails };
