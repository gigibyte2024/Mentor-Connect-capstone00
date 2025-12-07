// src/routes/mentorRoutes.js
import express from "express";
const router = express.Router();

import { createMentor, getMentors } from "../controllers/mentorController.js";
import { protectRoute } from "../middleware/protectRoute.js";

// CREATE mentor profile
router.post("/", protectRoute, createMentor);

// GET mentors (search, sort, filter)
router.get("/", getMentors);

export default router;
