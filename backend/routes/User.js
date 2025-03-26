import express from "express";
import { register, login, logout } from "../controllers/User.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(auth, logout);

export default router;
