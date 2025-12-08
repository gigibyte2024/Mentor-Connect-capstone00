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

// -------------------------------------------
// ✅ FINAL CORS FIX (WORKS ON VERCEL + RENDER)
// -------------------------------------------
const allowedOrigins = [
  "https://mentor-connect-capstone00.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow server-to-server calls (no origin)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ BLOCKED ORIGIN:", origin);
      return callback(new Error("CORS not allowed"), false);
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ❌ DO NOT USE app.options("*") — it breaks Render
// ❌ DO NOT USE app.options("/*") — causes PathError

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Backend running successfully!");
});

// ----------------------
//   PUBLIC ROUTES
// ----------------------
app.use("/api/auth", authRoutes);

// ----------------------
//   PROTECTED ROUTES
// ----------------------
app.use("/api/users", protectRoute, userRoutes);
app.use("/api/mentors", protectRoute, mentorRoutes);
app.use("/api/resources", protectRoute, resourceRoutes);
app.use("/api/quiz", protectRoute, quizRoutes);
app.use("/api/chat", protectRoute, chatRoutes);

// ----------------------
//   START SERVER
// ----------------------
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
