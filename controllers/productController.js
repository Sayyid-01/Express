import {
  getProductById as getProductByIdService,
  addProduct,
} from "../services/productService.js";

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getAllProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "../view/product.html"));
};

const getProductById = (req, res) => {
  res.send(getProductByIdService(req.params.id));
};
const createProduct = (req, res) => {
  const data = req.body;
  res.json({Value: data.productName});
};

export { getAllProducts, getProductById, createProduct };