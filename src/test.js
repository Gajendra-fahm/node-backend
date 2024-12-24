
const mongoose = require("mongoose");
const getRegisterUserModel = require('./component/Model/testModel');

mongoose.connect('mongodb://localhost:27017/register', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log("MongoDB connected successfully.");

    try {
        // Fetch users
        const users = await getRegisterUserModel.find({});
        console.log("Fetched users:", users);
    } catch (error) {
        console.error("Error fetching users:", error);
    } finally {
        mongoose.connection.close();
    }
}).catch((error) => {
    console.error("MongoDB connection failed:", error);
});
