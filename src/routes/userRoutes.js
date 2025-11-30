import express from "express";
import auth from "../middleware/authMiddleware.js";
import { updateProfile, me } from "../controllers/userController.js";

const router = express.Router();

// Protected
router.put("/profile", auth, updateProfile);
router.get("/me", auth, me);

export default router;
