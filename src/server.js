// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import {connectDB} from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import productRoutes from "./routes/productRoutes.js";

// const app = express();
// app.get("/", (req, res) => {
//   res.send("API Working");
// });

// app.use(express.json());
// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);


// connectDB();

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.send("API Working 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Connect DB
connectDB();

// Port for Beanstalk
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
