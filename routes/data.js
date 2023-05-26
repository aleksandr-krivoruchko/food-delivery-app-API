import express from "express";
import {
  getShops,
  getMcdProducts,
  getKfcProducts,
  getAtbProducts,
  getOrders,
  createOrder,
} from "../controllers/data.js";
const router = express.Router();

router.get("/shops", getShops);
router.get("/mcd-products", getMcdProducts);
router.get("/kfc-products", getKfcProducts);
router.get("/atb-products", getAtbProducts);
router.get("/orders", getOrders);
router.post("/orders", createOrder);

export default router;
