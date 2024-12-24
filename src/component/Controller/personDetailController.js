const PersonsDetails = require('../Model/personDetailsModel');


exports.getUsers = async (req, res) => {
  try {
    const users = await PersonsDetails.getAllPersonsDetails();
    

    const responseData = {
        header: { status: 200, message: "User Details" },
        data: users,
      };
  
      return res.status(200).json(responseData);
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.addUsers = async (req, res) => {
    try {
      const persons = req.body;
      if (!Array.isArray(persons)) {
        return res.status(400).json({ message: 'Input must be an array of persons' });
      }

      const newUsers = await PersonsDetails.addPersons(persons);
      const responseData = {
        header: { status: 201, message: "Users added successfully" },
        data: [],
      };
      res.status(201).json(responseData);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};



//for single use add 
exports.addSinglePerson = async (req, res) => {
    try {
      const { personid, lastname, firstname, address, city } = req.body;
  
      const newPerson = {
        personid,
        lastname,
        firstname, 
        address,
        city
      };
  
      const newUser = await PersonsDetails.addSinglePerson(newPerson);
      const responseData = {
        header: { status: 201, message: "User added successfully" },
        
      };
  
      res.status(201).json(responseData);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

