const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  },
  captain:{
    type: mongoose.Schema.ObjectId,
    ref: "Captain",
    required: true
  },
  source:{
       type:String,
       required:true
  },
  destination:{
        type:String,
       required:true
  },
  fare:{
      type:Number,
      required:true
  },
  status:{
     type:String,
     enum:["pending",'completed','ongoing','accepted','cancelled'],
     default:'pending'
  },
  duration:{
     type:String,
     required:true
  },
  distance:{
       type:String,
       required:true
  },
  paymentId:{

  },
  orderId:{

  },
  signature:{

  }
});

const Ride=mongoose.model("Ride",rideSchema);
module.exports=Ride
