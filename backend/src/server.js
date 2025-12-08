import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// Routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import resourceRoutes from "./routes/resourceRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

// Middleware
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();

// ----------------------------------------------------
// ✅ FIXED CORS FOR VERCEL + RENDER + LOCALHOST
// ----------------------------------------------------
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server & Postman (no origin)
      if (!origin) return callback(null, true);

      // Allow Vercel main domain
      if (origin === "https://mentor-connect-capstone00.vercel.app")
        return callback(null, true);

      // Allow ALL Vercel preview deployments
      if (/vercel\.app$/.test(origin)) return callback(null, true);

      // Allow localhost (development)
      if (origin.startsWith("http://localhost")) return callback(null, true);

      console.log("❌ BLOCKED ORIGIN:", origin);
      return callback(new Error("CORS blocked"), false);
    },
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ❌ VERY IMPORTANT: DO NOT use app.options("*") on Render
// It breaks Express router and causes "Missing parameter name /*"

// Body parser
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend running successfully!");
});

// ----------------------
//  PUBLIC ROUTES
// ----------------------
app.use("/api/auth", authRoutes);

// ----------------------
//  PROTECTED ROUTES
// ----------------------
app.use("/api/users", protectRoute, userRoutes);
app.use("/api/mentors", protectRoute, mentorRoutes);
app.use("/api/resources", protectRoute, resourceRoutes);
app.use("/api/quiz", protectRoute, quizRoutes);
app.use("/api/chat", protectRoute, chatRoutes);

// ----------------------
//  START SERVER
// ----------------------
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
