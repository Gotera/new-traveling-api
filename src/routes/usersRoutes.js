import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
  .post("/api/register/user", UserController.registerUser)
  .post("/api/login", UserController.loginUser)
  .get("/api/user:id", UserController.loginUser);
export default router;
