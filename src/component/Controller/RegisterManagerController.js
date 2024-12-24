const registerUserModel = require("../Model/RegisterManagerModel")


const registerManagerController = async (req, res) =>{

    try {
        const { id, managername, email, password, phono} = req.body

        if(!managername || !email || !password || !phono){
            return res.status(700).json({
                header :{ status: 700, message: "Required missing parameters" }
            })
        }

        const addNewManager ={
            id, managername, email, password, phono
        }

        const newManagerAdded = await registerUserModel.RegisterManager(addNewManager);
        return res.status(200).json({header:{
            status: 200,
            message:" register success fully "
        }})


    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }

}
module.exports = {registerManagerController}

