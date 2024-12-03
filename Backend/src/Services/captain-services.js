const CaptainRepo = require("../Repository/captain-repo");
var jwt = require("jsonwebtoken");

class CaptainServ {
  constructor() {
    this.captain = new CaptainRepo();
  }

  async createCaptain(data) {
    try {
      const captain = await this.captain.create(data);
      return captain;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  async getcaptain(data) {
    try {
      const captain = await this.captain.findcaptain(data);
      if (!captain) {
        throw { message: "user not found" };
      }
      if (!captain.comparePasswoerd(data.password)) {
        throw { message: "incorrect password" };
      }
      //   const token = jwt.sign(
      //     { id: captain._id, email: captain.email },
      //     process.env.SECRET_KEY,
      //     { expiresIn: "24h" }
      //   );
      const token = await captain.jwtToken();

      return { ...captain, token };
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
  async captainProfile(data) {
    try {
      const captain = await this.captain.findUser(data);
      return captain;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
}

module.exports = CaptainServ;
