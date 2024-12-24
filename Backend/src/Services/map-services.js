const axios = require("axios");

const getAddressCoordinate = async ({ address }) => {
  const apiKey = process.env.MAP_API_KEY;
  const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${address}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    console.log(response);
    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getDistance = async ({ source, destination }) => {
  const apiKey = process.env.MAP_API_KEY;
  const url = `https://maps.gomaps.pro/maps/api/directions/json?destination=${destination}&origin=${source}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      return response.data;
    } else {
      throw new Error("Unable to fetch data");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const AutoCompleteSuggestion = async (input) => {
  console.log(input);
  const apiKey = process.env.MAP_API_KEY;
  const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}`;

  console.log(url);
  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      return response.data.predictions
        .map((prediction) => prediction.description)
        .filter((value) => value);
    } else {
      throw new Error("Unable to fetch data");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  getAddressCoordinate,
  getDistance,
  AutoCompleteSuggestion,
};
