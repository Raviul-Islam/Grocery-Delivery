import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrder,
  getOrderLocation,
  getUserOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";
import admin from "../middleware/admin.js";
import auth from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/", auth, createOrder);
orderRouter.get("/", auth, getUserOrders);
orderRouter.get("/all", auth, admin, getAllOrders);
orderRouter.get("/:id", auth, getOrder);
orderRouter.post("/:id/status", auth, admin, updateOrderStatus);
orderRouter.get("/:id/location", auth, admin, getOrderLocation);

export default orderRouter;
