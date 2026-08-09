import express from "express";
const router = express.Router();
import { getAllProducts, getProductById, addProduct } from "../controllers/productController.js";

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);

export default router;