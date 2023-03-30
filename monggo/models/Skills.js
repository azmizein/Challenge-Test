const mongoose = require("mongoose")

const SkillsSchema = new mongoose.Schema({
    gambar:{
        type:String,
        default:""
    },
    nama:{
        type:String
    },
    ahli:{
        type:String
    },
},
{timestamps:true}
)

module.exports = mongoose.model("Skills", SkillsSchema);