const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
 fullname: {
       firstname:{
        type: String,
        require: true,
       },
       lastname:{
        type: String,
        require: true,
       }
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    // select: false
  },
});
userSchema.pre("save", function (next) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(this.password, salt);
  this.password = hash;
  next();
});

// userSchema.methods.compare=function fun(password)
// {
//     return bcrypt.compareSync(password, this.password)
// }

// userSchema.methods.jwtToken=function fun1()
// {
//    return jwt.sign({id:this._id, email:this.email}, process.env.SECRET_KEY, { expiresIn: '1h' });
//}
const User = mongoose.model("User", userSchema);
module.exports = User;
