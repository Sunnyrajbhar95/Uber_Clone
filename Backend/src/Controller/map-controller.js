const {
  getAddressCoordinate,
  getDistance,
  AutoCompleteSuggestion,
} = require("../Services/map-services");

const getCoordinates = async (req, res) => {
  try {
    const address = req.query;
    console.log(address);
    const response = await getAddressCoordinate(address);
    return res.status(201).json({
      response,
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(501).json({
      success: false,
      error: err,
    });
  }
};

const getDirection = async (req, res) => {
  try {
    const { source, destination } = req.query;
    console.log(req.query);
    const response = await getDistance({ source, destination });
    return res.status(201).json({
      response,
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(501).json({
      success: false,
      error: err,
    });
  }
};

const getSuggestion = async (req, res) => {
  try {
    const { input } = req.query;
    
    const response = await AutoCompleteSuggestion(input);
    return res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getCoordinates,
  getDirection,
  getSuggestion
};
