import dotenv from "dotenv"; // 1. Import dotenv first

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";       // 3. Now it's safe to import your DB config
import authRoutes from "./routes/auth.routes.js";

const app = express();
dotenv.config();           // 2. Initialize it immediately so process.env is filled

// Middleware Setup
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true, 
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.get("/", (_req, res) => res.send("Auth API is running"));

// Port Configuration
const PORT = process.env.PORT || 5000;

// Connect to Database, then Start Server
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Failed to start server due to DB connection error:", error);
  });