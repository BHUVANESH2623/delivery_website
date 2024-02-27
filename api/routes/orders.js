import express from "express";
import {
  AddOrders,
  GetOrders,
  GetUserOrder,
  UpdateOrder,
} from "../controllers/orders.js";

const router = express.Router();

router.get("/", GetOrders);
router.post("/", AddOrders);
router.get("/userorder", GetUserOrder);
router.put("/:id", UpdateOrder);

export default router;
