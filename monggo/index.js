const express = require ("express");
const server = express();
const PORT = 8800;
const mongoose  = require("mongoose");
const cors = require("cors");
const khrisRoutes = require("./routes/khris")

const dotenv = require ("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGGO_URL, {useNewUrlParser: true} );


//middleware
server.use(express.json());
server.use(cors());
server.use("/khris", khrisRoutes);


server.listen(PORT, () => {
    console.log("success Running at Port: " + PORT);
})