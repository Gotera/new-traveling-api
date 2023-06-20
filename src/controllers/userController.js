import { users } from "../models";

class UserController {
  static registerUser = async (req, res, next) => {
    try {
      let user = new users(req.body);
      const userResult = await user.save();
      res.status(201).send(userResult.toJSON());
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
