import jwt from "jsonwebtoken";

function checkToken(req, res, next) {
	const result = req.result
  const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send({ message: "Acesso Negado!" });
	}
	
	try {
		const secret = process.env.SECRET
		jwt.verify(token, secret)
    res.status(200).json({ result });
	} catch (err){
		res.status(400).json({ menssage: "Token Invalido" })
	}
}

export default checkToken;
