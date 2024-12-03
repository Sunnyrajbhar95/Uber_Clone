const mongoose=require("mongoose")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


const captainSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,

        },
        lastname:{
            type:String
        }
    },
    email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    socketId:{
       type:String,
    },
    status:{
       type:String,
       enum:['inactive','active'],
       default:"inactive"
    },
    vehical:{
          color:{
              type:String,
              required:true,    
          },
          plate:{
            type:String,
            required:true,
          },
          capacity:{
             type:Number,
             required:true
          },
          vehicalType:{
            type:String,
            required:true,
             enum:["Car","Bike","Auto"]
          }
    },
    location:{
        lat:{
            type:Number
        },
        lng:{
            type:Number
        }
    }

})

captainSchema.pre("save",function(next){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;
    next();   
})
captainSchema.methods.comparePasswoerd=function fun(password)
{
     return bcrypt.compareSync(password, this.password) 
}

captainSchema.methods.jwtToken= async function fun2()
{
      const token= await jwt.sign({id:this.id, email:this.email},process.env.SECRET_KEY, { expiresIn:"24h" });
      return token;
}

const Captain=new mongoose.model("Captain",captainSchema);
module.exports=Captain