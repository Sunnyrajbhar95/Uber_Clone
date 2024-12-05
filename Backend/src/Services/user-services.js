const userRepo = require("../Repository/index");
const Compare = require("../utilities/index");
var jwt = require('jsonwebtoken');

class userService {
  constructor() {
    this.UserRepo = new userRepo();
  }

  async create(data) {
    try {
      console.log(data)
      if (!data.fullname.firstname|| !data.fullname.lastname || !data.email || !data.password) {
        throw { message: "incomplete user credential" };
      }
      const user = await this.UserRepo.CreateUser(data);
      return user;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  async login(data) {
    try {
      const user = await this.UserRepo.findUser(data);
      if (!user) {
        throw { message: "user not found" };
      }
      console.log(user)
      if (!Compare(data.password, user.password)) {
        throw { message: "incorrect password" };
      }
      const token = jwt.sign({id:user._id,email:user.email}, process.env.SECRET_KEY, { expiresIn: "24h" });

      return { ...user, token };
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  async userProfile(data){
      try{
           const user=await this.UserRepo.findUser(data) 
           return user;
      }
      catch(err)
      {
          console.log(err);
          throw {err};
      }
  }
}
module.exports = userService;
