const mongoose=require('mongoose')

const Connect=async()=>{
      await mongoose.connect("mongodb://localhost:27017/Uber_db", {
        useNewUrlParser: true,
        useUnifiedTopology: true
     });
     console.log("Connection established")
}
module.exports=Connect