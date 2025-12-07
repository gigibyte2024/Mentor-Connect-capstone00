// src/routes/quizRoutes.js
import express from "express";
const router = express.Router();

import { submitQuiz } from "../controllers/quizController.js";
import { protectRoute } from "../middleware/protectRoute.js";

// Submit quiz
router.post("/", protectRoute, submitQuiz);

export default router;
