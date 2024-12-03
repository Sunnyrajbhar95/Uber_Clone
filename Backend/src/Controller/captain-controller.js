const CaptainServ = require("../Services/captain-services");
const services = new CaptainServ();
const BlacklistToken=require("../Model/blacklistedToken")

const CreateCaptain = async (req, res) => {
  try {
    const captain = await services.createCaptain(req.body);
    return res.status(200).json({
      captain,
      success: true,
      message: "something went wrong",
      error: [],
    });
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
};

const login = async (req, res) => {
  try {
    const captain = await services.getcaptain(req.body);
    console.log(captain);
    return res.status(200).json({
      captain: {
        name: captain._doc.fullname,
        email: captain._doc.email,
        token: captain.token,
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
const capProfile = async (req, res) => {
  try {
    const captain = await services.captainProfile(req.captain);
    return res.status(200).json({
      captain: {
        id: captain._id,
        name: captain.fullname,
        email: captain.email,
        vehical: captain.vehical,
        location: captain.location,
      },
      // captain,
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
  CreateCaptain,
  login,
  capProfile,
  Logout
};
