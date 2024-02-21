import express from "express";
import { Login, Register, logout } from "../controllers/user.js";

const router = express.Router();

router.post("/login", Login);
router.post("/register", Register);
router.post("/logout", logout);

export default router;
