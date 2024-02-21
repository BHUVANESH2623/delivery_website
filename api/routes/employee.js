import express from "express";
import { AddEmployee, GetEmployee } from "../controllers/employee.js";

const router = express.Router();

router.get("/", GetEmployee);
router.post("/", AddEmployee);

export default router;
