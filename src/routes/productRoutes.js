// routes/productRoutes.js
import express from "express";
import {
  getProducts,
  getProductById,
  updateReview,
  addProduct,
  editProduct,
  deleteProduct
} from "../controllers/productController.js";
import auth from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

// Public APIs
router.get("/", getProducts);                // Search/filter products
router.get("/:product_id", getProductById); // Full product details
router.post("/:product_id/review", updateReview); // Add review

// Admin APIs
router.post("/", auth, isAdmin, addProduct);
router.put("/:product_id", auth, isAdmin, editProduct);
router.delete("/:product_id", auth, isAdmin, deleteProduct);

export default router;
