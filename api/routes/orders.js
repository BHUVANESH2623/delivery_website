import express from "express";
import { AddOrders, GetOrders } from "../controllers/orders.js";

const router = express.Router();

router.get("/", GetOrders);
router.post("/", AddOrders);

export default router;
