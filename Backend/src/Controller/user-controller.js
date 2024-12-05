const { response } = require("express");
const userService = require("../Services/user-services");
const UserServices = new userService();
const { validationResult, body } = require("express-validator");
const BlacklistToken=require("../Model/blacklistedToken")

const SignUp = async (req, res) => {
  try {
    
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Something went wrong",
      });
    }
    const user = await UserServices.create(req.body);
    return res.status(200).json({
      user: {
        fullname:user.fullname,
        email: user.email,
      },
      success: true,
      message: "User created Successfully",
      error: [],
    });
  } catch (err) {
    console.log(err);
    return res.status(501).json({
      success: false,
      error: err,
    });
  }
};

const SignIn = async (req, res) => {
  try {
    const error = validationResult(req);
    console.log(error);
    if (!error.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Something went wrong",
      });
    }
    const user = await UserServices.login(req.body);
    return res.status(200).json({
      user: {
        name: user.name,
        email: user.email,
        token: user.token,
      },
      success: true,
      message: "User logged in successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(501).json({
      success: false,
      error: err,
    });
  }
};
const Profile = async (req, res) => {
  try {
    const user = await UserServices.userProfile(req.body);
    return res.status(200).json({
      user: {
        name: user.name,
        email: user.email,
      },
      success: true,
      message: "User Fetched successfully",
      error: [],
    });
  } catch (err) {
    console.log(err);
    return res.status(501).json({
      success: false,
      error: err,
    });
  }
};

const Logout=async(req,res)=>{
  try{
      const token = req.headers["x-access"];
      const data=await BlacklistToken.create({token:token});
      return res.status(200).json({
        message:"User Logged Succefully"
      })
  }
  catch(err)
  {
      console.log(err)
      return res.status(401).json({
        success:false,
        message:"something went wrong"
      })
  }
}
module.exports = {
  SignUp,
  SignIn,
  Profile,
  Logout
};
