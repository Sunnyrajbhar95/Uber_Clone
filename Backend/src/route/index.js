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
const {
  CreateCaptain,
  login,
  capProfile,
} = require("../Controller/captain-controller");
const isCaptain = require("../Middleware/captainAuth");
const {getCoordinates,getDirection,getSuggestion}=require('../Controller/map-controller')
const {CreateUserRide,getTotalFare}=require("../Controller/ride-controller")

router.post(
  "/signup",
  [
    // Validation rules
    body("fullname")
      .isLength({ min: 5 })
      .withMessage("Username must be at least 5 characters long"),
    body("email").isEmail().withMessage("Please provide a valid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  SignUp
);
router.post(
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

router.post("/captain", CreateCaptain);
router.post("/login", login),
 router.get("/capprofile", isCaptain, capProfile);
router.get("/capLogout", isCaptain, Logout);
router.get("/get-location",isAuth ,getCoordinates);
router.get("/route",isAuth,getDirection);
router.get("/get-suggestion",getSuggestion)
router.post('/create-ride',isAuth,CreateUserRide)
router.get('/get-fare',isAuth,getTotalFare);

module.exports = router;
