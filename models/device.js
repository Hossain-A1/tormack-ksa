const mongoose = require("mongoose")

const deviceSchema = new mongoose.Schema({
  ipAddress:{
    type:String,
    require:true
  },
  hostname:{
    type:String,
    require:true
  },
  os:{
    type:String,
    require:true
  },
  userAgent:{
    type:String,
    require:true
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    require:true
  },
})


module.exports = mongoose.model("Device",deviceSchema)