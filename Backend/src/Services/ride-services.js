const { rideRepository } = require("../Repository/ride-repo");
const { getDistance } = require("../Services/map-services");
const crypto = require('crypto');

async function getFare(source, destination) {
  if (!source || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const distanceTime = await getDistance({ source, destination });
  console.log(distanceTime);

  const baseFare = {
    auto: 30,
    car: 50,
    moto: 20,
  };

  const perKmRate = {
    auto: 10,
    car: 15,
    moto: 8,
  };

  const perMinuteRate = {
    auto: 2,
    car: 3,
    moto: 1.5,
  };

  const fare = {
    auto: Math.round(
      baseFare.auto +
        (distanceTime[0].distance.value / 1000) * perKmRate.auto +
        (distanceTime[0].duration.value / 60) * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        (distanceTime[0].distance.value / 1000) * perKmRate.car +
        (distanceTime[0].duration.value / 60) * perMinuteRate.car
    ),
    moto: Math.round(
      baseFare.moto +
        (distanceTime[0].distance.value / 1000) * perKmRate.moto +
        (distanceTime[0].duration.value / 60) * perMinuteRate.moto
    ),
  };

  return fare;
}

function generateOTP() {
    return crypto.randomInt(100000, 999999);
  }
class rideServices {
  constructor() {
    this.rideRepo = new rideRepository();
  }

  async CreateRide({ user, source, destination, vehicalType }) {
    try {
      const fare = await getFare(source,destination);

      const ride = await this.rideRepo.createRide({
        user,
        source,
        destination,
        fare: fare[vehicalType],
        duration: "1.30hr",
        distance: "123",
        otp:generateOTP()
      });
      return ride;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
}
module.exports = {
  rideServices,
};
