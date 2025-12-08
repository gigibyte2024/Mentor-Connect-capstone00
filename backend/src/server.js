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

// ----------- CORS FIX ------------
app.use(
  cors({
    origin: [
      "https://mentor-connect-capstone00.vercel.app",
      "http://localhost:5173"
    ],
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

// FIX: Express 5 wildcard route (DO NOT USE "*")
app.options("/*", cors());

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Backend running successfully!");
});

// PUBLIC ROUTES
app.use("/api/auth", authRoutes);

// PROTECTED ROUTES
app.use("/api/users", protectRoute, userRoutes);
app.use("/api/mentors", protectRoute, mentorRoutes);
app.use("/api/resources", protectRoute, resourceRoutes);
app.use("/api/quiz", protectRoute, quizRoutes);
app.use("/api/chat", protectRoute, chatRoutes);

// Start Server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
