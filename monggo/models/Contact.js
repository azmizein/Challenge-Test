const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    project:{
        type:String
    },
},
{timestamps:true}
)

module.exports = mongoose.model("Contact", ContactSchema);