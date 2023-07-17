import jwt from "jsonwebtoken";
import { users } from "../models/index.js";

async function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).send({ message: "Acesso Negado!" });
	}
	
  const token = authHeader.split(" ")[1];
  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);

		//
    const decodedToken = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
		);

		const userid = decodedToken.id;
		const user = await users.findById(userid, "-password");

		res.locals.user = user
    return next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ menssage: "Token Invalido" });
  }
}

export default checkToken;
