const registerUserModel = require("../Model/RegisterUserModel")


const registerUserController = async (req, res) =>{
    try {
        const {userid ,username, useremail, userpassword, mobile, address} = req.body

        if( !username || !useremail || !userpassword||  !mobile||  !address){
            return res
          .status(700)
          .json({ header: { status: 700, message: "Required missing parameters" } });
        }

        const registerNewUser = {
            userid ,
            username, 
            useremail, 
            userpassword, 
            mobile, 
            address
        }

        const registerUser = await registerUserModel.registerUser(registerNewUser);
        // console.log(registerUser)
        return res.status(200).json({header: { status: 201, message: "User register successfully" }})
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}








module.exports = {registerUserController}