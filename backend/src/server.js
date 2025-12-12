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
// ✅ CORS FOR VERCEL + RENDER + LOCALHOST
// ----------------------------------------------------
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // server-to-server, postman

      // Allow main Vercel domain
      if (origin === "https://mentor-connect-capstone00.vercel.app")
        return callback(null, true);

      // Allow all vercel preview links
      if (/vercel\.app$/.test(origin)) return callback(null, true);

      // Allow localhost
      if (origin.startsWith("http://localhost")) return callback(null, true);

      console.log("❌ BLOCKED ORIGIN:", origin);
      return callback(new Error("CORS blocked"), false);
    },
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Body parser
app.use(express.json());

// ----------------------
//  TEST ROUTE
// ----------------------
app.get("/", (req, res) => {
  res.send("🚀 Backend running successfully!");
});

// ----------------------
//  PUBLIC ROUTES
// ----------------------
app.use("/api/auth", authRoutes);

// ----------------------
//  USERS (protected)
// ----------------------
app.use("/api/users", protectRoute, userRoutes);

// ----------------------
//  MENTORS 
//  GET routes → PUBLIC
//  update/delete → protected inside mentorRoutes.js
// ----------------------
app.use("/api/mentors", mentorRoutes);

// ----------------------
//  RESOURCES (protected)
// ----------------------
app.use("/api/resources", protectRoute, resourceRoutes);

// ----------------------
//  QUIZ ROUTES (protected)
// ----------------------
app.use("/api/quiz", protectRoute, quizRoutes);

// ----------------------
//  CHAT ROUTES (protected)
// ----------------------
app.use("/api/chat", protectRoute, chatRoutes);

// ----------------------
//  START SERVER
// ----------------------
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
