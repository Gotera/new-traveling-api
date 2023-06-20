import express from "express";
import UserController from "../controllers/userController";

const router = express.Router();

router 
	.post("/api/register/user", UserController.registerUser)
export default router;
