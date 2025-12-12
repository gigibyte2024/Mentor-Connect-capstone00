import express from "express";
import {
  getMentors,
  getMentorById,     // ✅ added/used below
  updateMentor,
  deleteMentor
} from "../controllers/mentorController.js";

import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

/* ============================================================
   GET ALL MENTORS (PUBLIC)
   @route GET /api/mentors
   @access Public
=============================================================== */
router.get("/", getMentors);

/* ============================================================
   GET MENTOR BY ID (for Mentor Profile Page) (PUBLIC)
   @route GET /api/mentors/:id
   @access Public
   NOTE: keep this AFTER /me if you have /me GET — but we don't.
=============================================================== */
router.get("/:id", getMentorById);

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
