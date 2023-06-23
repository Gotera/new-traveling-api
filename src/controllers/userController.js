import validatePassword from "../middlewares/validatePass.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { users } from "../models/index.js";
import error404 from '../errors/notFound.js'

class UserController {
  static registerUser = async (req, res, next) => {
    try {
      const { name, password, email, confirmpassword } = req.body;
      const dataVerified = new users({
        name,
        email,
        password,
      });
      //CHECK IF PASSWORDS IS EQUAL
      if (password !== confirmpassword) {
        return res.status(422).json({ error: "As senhas não coincidem!" });
      }
      //CHECK IF USER ALREADY EXISTS
      const userExists = await users.findOne({ email: email });
      if (userExists) {
        return res
          .status(422)
          .json({ error: "Email já cadastrado! Por favor, utileze outro!" });
      }
      await dataVerified.save();
      res.status(201).send(dataVerified.toJSON());
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  static loginUser = async (req, res, next) => {
    try {
      //CHECK IF USER ALREADY EXIST
      const { email, password } = req.body;
      const user = await users.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado!" });
      }

      //CHECK IF PASSWORD MATCH
      const checkpassword = bcrypt.compare(password, user.password);
      if (!checkpassword) {
        return res.status(422).json({ error: "Senha Invalida!" });
      }

      // CREATE A TOKEN
      const secret = process.env.SECRET;
      const token = jwt.sign(
        {
          id: user.id,
        },
        secret
      );

      res
        .status(200)
        .json({ msg: "Autenticação realizada com sucesso!", token });
    } catch (err) {
      next(err);
    }
  };

  //PRIVATE ROUTE
  static porenquanto = async (req, res, next) => {
    const id = req.params.id;
    //CHECK IF USER ALREADY EXIST - PASSWORD
    const user = await users.findById(id, "-password");

    if (!user) {
      next(error404)
    }
  };
}
export default UserController;
// let user = new users(req.body);
