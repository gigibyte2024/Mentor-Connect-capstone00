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
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend running successfully!");
});

// Public routes (no login needed)
app.use("/api/auth", authRoutes);

// Protected routes (login required)
app.use("/api/users", protectRoute, userRoutes);
app.use("/api/mentors", protectRoute, mentorRoutes);
app.use("/api/resources", protectRoute, resourceRoutes);
app.use("/api/quiz", protectRoute, quizRoutes);
app.use("/api/chat", protectRoute, chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
