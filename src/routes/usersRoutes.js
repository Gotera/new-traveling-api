import express from "express";
import UserController from "../controllers/userController.js";
import checkToken from "../middlewares/checkToken.js";

const router = express.Router();

router
  .post("/api/register/user", UserController.register)
  .post("/api/login", UserController.login)
  .get("/api/user", checkToken, UserController.me);
export default router;
