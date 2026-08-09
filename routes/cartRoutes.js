import express from "express";
const router = express.Router();
import { getCartForUser, addProductToCart} from "../controllers/cartController.js";
router.get("/:userId", getCartForUser);
router.post("/:userId", addProductToCart);


export default router;