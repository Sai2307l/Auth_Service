const { UserRepo } = require("../repository/index");

class UserService {
  constructor() {
    this.userRepository = new UserRepo();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong in the Service layer");
      throw { error };
    }
  }
}
module.exports = UserService;
