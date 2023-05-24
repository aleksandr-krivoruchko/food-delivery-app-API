import express from "express";
import { getShops, getProducts } from "../controllers/products.js";

export const router = express.Router();

router.get("/api/shops", getShops);

router.get("/api/products", getProducts);

export default router;
