const jwt = require("jsonwebtoken");
const User = require("../Model/user");
const BlacklistToken = require("../Model/blacklistedToken");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["x-access"];

    const isBlacklisted = await BlacklistToken.findOne({ token: token });
    if (isBlacklisted) {
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

    const response = await User.findById(data.id).select("-password");

    if (!response) {
      return res.status(501).json({
        success: false,
        message: "Unauthorized user",
      });
    }
    req.user = response;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      error: err,
    });
  }
};

module.exports = isAuth;
