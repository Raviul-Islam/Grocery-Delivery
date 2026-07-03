import express from "express";
import {
  createProduct,
  getFlashDeals,
  getProduct,
  updateProduct,
  deleteProduct,
  getProducts,
} from "../controllers/productController.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const productRouter = express.Router();

productRouter.get("/flash-deals", getFlashDeals);
productRouter.get("/", getProducts);
productRouter.get("/", getProduct);
productRouter.post("/", auth, admin, createProduct);
productRouter.post("/", auth, admin, updateProduct);
productRouter.post("/", auth, admin, deleteProduct);

export default productRouter;
