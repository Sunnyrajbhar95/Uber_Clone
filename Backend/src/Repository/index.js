const User = require("../Model/user");

class userRepo {
  async CreateUser(data) {
    try {
      console.log(data);
      const user = await User.create({
        fullname: {
          firstname:data.fullname.firstname,
          lastname:data.fullname.firstname,
        },
        email: data.email,
        password: data.password,
      });
      return user;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  async findUser(data) {
    try {
      const user = await User.findOne({ email: data.email }).lean();

      return user;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
}
module.exports = userRepo;
