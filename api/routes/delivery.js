import express from "express";
import {
  GetDeliveredItems,
  GetDeliveryItems,
} from "../controllers/delivery.js";

const router = express.Router();

router.get("/items", GetDeliveryItems);
router.get("/success", GetDeliveredItems);

export default router;
