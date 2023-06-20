import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.post("/api/register/user", UserController.registerUser);
export default router;
