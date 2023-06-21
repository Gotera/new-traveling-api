import express from "express";
import UserController from "../controllers/userController.js";
import validatePassword from "../middlewares/validatePass.js";

const router = express.Router();

router.post("/api/register/user", UserController.registerUser, validatePassword);
export default router;
