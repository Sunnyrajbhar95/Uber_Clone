const Captain = require("../Model/captain");

class CaptainRepo {
  async create(data) {
    try {
      const captain = await Captain.create({
        fullname: data.fullname,
        email: data.email,
        password: data.password,
        vehical: data.vehical,
        location: data.location,
      });

      return captain;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  async findcaptain(data) {
    try {
      const captain = await Captain.findOne({
        email: data.email,
      });
      return captain;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
  async findUser(data) {
    try {
      const captain = await Captain.findOne({ email: data.email }).lean();

      return captain;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
}

module.exports = CaptainRepo;
