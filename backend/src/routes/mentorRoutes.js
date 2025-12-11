import express from "express";
import {
  getMentors,
  getMentorById,     // ⭐ REQUIRED
  updateMentor,
  deleteMentor
} from "../controllers/mentorController.js";

import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

/* ============================================================
   GET ALL MENTORS
   @route GET /api/mentors
   @access Private
=============================================================== */
router.get("/", protectRoute, getMentors);

/* ============================================================
   GET MENTOR BY ID (for Mentor Profile Page)
   @route GET /api/mentors/:id
   @access Private
=============================================================== */
router.get("/:id", protectRoute, getMentorById);

/* ============================================================
   UPDATE LOGGED-IN MENTOR
   @route PUT /api/mentors/me
   @access Private
=============================================================== */
router.put("/me", protectRoute, updateMentor);

/* ============================================================
   DELETE LOGGED-IN MENTOR
   @route DELETE /api/mentors/me
   @access Private
=============================================================== */
router.delete("/me", protectRoute, deleteMentor);

export default router;
