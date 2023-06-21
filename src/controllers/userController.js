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

// "users.comparePassword(request.body.password, (error, match) => {
//   if (!match) {
//     return response.status(400).send({ message: "The password is invalid" });
//   }
// });"

export default UserController;
