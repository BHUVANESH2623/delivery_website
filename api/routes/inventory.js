import express from "express";
import { AddItems, GetItems } from "../controllers/inventory.js";
import { inventoryMiddle } from "../protected/inventoryMiddle.js";

const router = express.Router();

router.get("/", GetItems);
router.post("/", inventoryMiddle, AddItems);

export default router;
