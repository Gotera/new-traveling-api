import validatePassword from "../middlewares/validatePass.js";
import { users } from "../models/index.js";

class UserController {
  static registerUser = async (req, res, next) => {
    try {
      const { name, password, email, confirmpassword } = req.body;
      const dataVerified = new users({
        name: name,
        email: email,
        password: password,
      });
      //CHECK IF PASSWORDS IS EQUAL
      if (password !== confirmpassword) {
        return res.status(422).json({ error: "As senhas não coincidem!" });
      }
      //CHECK IF USER ALREADY EXISTS
      const userExists = await users.findOne({ email: email });
      if (userExists) {
        return res.status(422).json({ error: "Email já cadastrado! Por favor, utileze outro!" });
      }

      await dataVerified.save();
      res.status(201).send(dataVerified.toJSON());
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}
export default UserController;
// let user = new users(req.body);
