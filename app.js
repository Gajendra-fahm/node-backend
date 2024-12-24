const express = require("express");
const http = require('http');
const { Server } = require('socket.io');
const cors = require("cors")
const webpush = require('web-push');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const routes = require("../server/src/component/Routes/routes");
// const {pool} = require("../server/src/dbconnection/DBConnection")
// const imageRoutes = require('../server/src/component/Routes/routes');

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));



// Socket.IO connection handler
io.on('connection', (socket) => {
  console.log("socket", socket);
  console.log('A user connected:', socket.id);

  socket.emit('notificationToClient', 'Welcome to the Notification System!');

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// const imageRoutes = require('./routes/imageRoutes');



// mongoose.connect('mongodb://localhost:27017/crud');
//mongoose.connect('mongodb://localhost:27017/register');
//mongodb+srv://superadmin:<password>@wogom-master-catalogue.wjfjwvk.mongodb.net/
// mongoose.connect('mongodb://mongodb+srv://superadmin:Wogom@123@wogom-master-catalogue.wjfjwvk.mongodb.net/wogom-dev');
//mongoose.connect('mongodb+srv://superadmin:Wogom%40123@wogom-master-catalogue.wjfjwvk.mongodb.net/wogom-dev');






app.use(express.json());
app.use(cors())

app.use("/api/", routes);

const PORT = process.env.PORT || 6006;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



