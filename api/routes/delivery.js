import express from "express";
import {
  GetDeliveredItems,
  GetDeliveryItems,
} from "../controllers/delivery.js";
import { deliveryMiddle } from "../protected/deliveryMiddle.js";

const router = express.Router();

router.get("/items", deliveryMiddle, GetDeliveryItems);
router.get("/success", GetDeliveredItems);

export default router;
