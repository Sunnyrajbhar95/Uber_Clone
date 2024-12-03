const jwt = require("jsonwebtoken");
const Captain = require("../Model/captain");
const BlacklistToken = require("../Model/blacklistedToken");

const isCaptain = async (req, res, next) => {
  try {
    const token = req.headers["x-access"];
    console.log(token)

    const isBlacklisted=await BlacklistToken.findOne({token:token})
    if(isBlacklisted){
      return res.status(501).json({
         success: true,
         message: "unAuthorized",
       });
    }

    const data = jwt.verify(token, process.env.SECRET_KEY);
    if (!data) {
      return res.status(501).json({
        success: false,
        message: "User not found",
      });
    }
    
    console.log(data)
    const response = await Captain.findById(data.id).select("-password");
    console.log(response)
    if (!response) {
      return res.status(501).json({
        success: false,
        message: "Unauthorized user",
      });
    }
    req.captain = response;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      error: err,
    });
  }
};

module.exports = isCaptain;
