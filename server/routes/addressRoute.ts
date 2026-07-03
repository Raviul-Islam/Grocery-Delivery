import express from "express";
import auth from "../middleware/auth.js";
import {
  addAddresses,
  deleteAddresses,
  getAddresses,
  updateAddresses,
} from "../controllers/addressController.js";

const addressRouter = express.Router();

addressRouter.get("/", auth, getAddresses);
addressRouter.get("/", auth, addAddresses);
addressRouter.get("/:id", auth, updateAddresses);
addressRouter.get("/:id", auth, deleteAddresses);

export default addressRouter;
