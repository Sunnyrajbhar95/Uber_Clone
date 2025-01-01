const { rideServices,getFare } = require("../Services/ride-services");

const ride = new rideServices();

const CreateUserRide = async (req, res) => {
  try {
    const { source, destination, vehicalType } = req.body;
    const response = await ride.CreateRide({
      user: req.user._id,
      source,
      destination,
      vehicalType,
    });
    return res.status(201).json({
      response,
      success: true,
      message: "Ride created successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(501).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
const getTotalFare = async (req, res) => {
  try {
    const { source, destination}=req.query
    const response=await getFare(source,destination);
    return res.status(201).json({
      response,
      success:true,
      message:"Fare fetched Successfully"
    }) 
  } catch (err) {
    console.log(err);
    return res.status(501).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
module.exports = {
  CreateUserRide,
  getTotalFare
};
