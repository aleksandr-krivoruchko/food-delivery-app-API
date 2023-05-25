import express from "express";
import {
  getShops,
  getProducts,
  getDataById,
  getTodos,
} from "../controllers/data.js";
const router = express.Router();

router.get("/shops", getShops);
// router.get("/McDonalds-products", getProducts);
router.get("/products", getProducts);
// router.get("/ATB-products", getProducts);

router.get("/todos", getTodos);

router.get("/data/:id", getDataById);

export default router;
