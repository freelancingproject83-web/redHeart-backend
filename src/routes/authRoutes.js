import express from "express";
import { sendOtp, verifyOtp } from "../controllers/authController.js";
console.log("authRoutes file LOADED...");

const router = express.Router();


router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
console.log("After registering routes =", router.stack.map(r => r.route?.path));

export default router;
