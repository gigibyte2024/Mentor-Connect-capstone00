import express from "express";
import {
  getAllQuizzes,
  getQuizById,
  submitQuiz
} from "../controllers/quizController.js";

import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// Get list of quizzes
router.get("/", protectRoute, getAllQuizzes);

// Get quiz with questions
router.get("/:id", protectRoute, getQuizById);

// Submit quiz score
router.post("/submit", protectRoute, submitQuiz);

export default router;
