import { users } from "../models/index.js";

class UserController {
  static registerUser = async (req, res, next) => {
    try {
      let user = new users(req.body);
      req.result = user;
      next();
    } catch (err) {
      next(err);
    }
  };
}
export default UserController;
