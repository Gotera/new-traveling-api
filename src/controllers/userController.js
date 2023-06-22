import validatePassword from "../middlewares/validatePass.js";
import { users } from "../models/index.js";

class UserController {
  static registerUser = async (req, res, next) => {
    try {
      const { name, password, email } = req.body;
      if (!validatePassword(String(password))) {
        return res.status(400).json({ error: "senha invalida" });
      }
      const dataVerified = new users({
        name: name,
        email: email,
        password: password,
      });
      await dataVerified.save();
      res.status(201).send(dataVerified.toJSON());
    } catch (err) {
      console.log(err)
      next(err);
    }
  };
}
export default UserController;
// let user = new users(req.body);
