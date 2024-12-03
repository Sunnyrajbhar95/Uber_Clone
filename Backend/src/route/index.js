const express = require("express");
const router = express.Router();
const {
  SignUp,
  SignIn,
  Profile,
  Logout,
} = require("../Controller/user-controller");
const isAuth = require("../Middleware");
const { body } = require("express-validator");
const {CreateCaptain,login,capProfile}=require("../Controller/captain-controller")
const isCaptain=require("../Middleware/captainAuth")

router.post(
  "/signup",
  [
    // Validation rules
    body("name")
      .isLength({ min: 5 })
      .withMessage("Username must be at least 5 characters long"),
    body("email").isEmail().withMessage("Please provide a valid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  SignUp
);
router.get(
  "/signin",
  [
    // Validation rules
    body("email").isEmail().withMessage("Please provide a valid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  SignIn
);

router.get("/profile", isAuth, Profile);

router.get("/logout", isAuth, Logout);

router.post("/captain",CreateCaptain);
router.get("/login",login),
router.get("/capprofile",isCaptain,capProfile)
router.get("/capLogout",isCaptain,Logout)

module.exports = router;
