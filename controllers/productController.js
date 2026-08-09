import {
  getAllProducts as getAllProductsService,
  getProductById as getProductByIdService,
  addProduct,
} from "../services/productService.js";

const getAllProducts = (req, res) => {
  const result = getAllProductsService();
  res.send(result);
};

const getProductById = (req, res) => {
  const productId = req.params.id;

  const result = getProductByIdService(productId);
  res.send(result);
};

const createProduct = (req, res) => {
  const result = addProduct(req.body);
  res.send(result);
};

export { getAllProducts, getProductById, createProduct };