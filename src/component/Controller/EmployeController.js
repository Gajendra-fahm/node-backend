const employeModelSchema = require("../Model/EmployeModel");

const employeController = async (req, res) => {
  const { empid, empname, empemail, empaddress, empmob, alertmob } = req.body;

  if (!empname || !empemail || !empaddress || !empmob) {
    return res.status(400).json({ message: "required parameter missing" });
  }

  //generate random employe ID
  const generatedEmpId = empid || Math.floor(Math.random() * 1000000);
  
  try {
    // Check if empemail already exists
    const existingEmployee = await employeModelSchema.findOne({ empemail });

    if (existingEmployee) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newEmployeAdded = new employeModelSchema({
      empid: generatedEmpId,
      empname,
      empemail,
      empaddress,
      empmob,
      alertmob,
    });

    const registered = await newEmployeAdded.save();

    return res
      .status(200)
      .json({ message: "Employe  detail added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { employeController };
