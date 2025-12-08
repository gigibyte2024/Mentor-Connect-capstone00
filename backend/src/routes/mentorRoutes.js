import express from "express";
import {
  getMentors,
  getMentorById,   // ⭐ NEW
  updateMentor,
  deleteMentor
} from "../controllers/mentorController.js";

import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

/**
 * -----------------------------------------
 * GET ALL MENTORS
 * @route GET /api/mentors
 * @access Private
 * -----------------------------------------
 */
router.get("/", protectRoute, getMentors);

/**
 * -----------------------------------------
 * GET SINGLE MENTOR BY ID
 * @route GET /api/mentors/:id
 * @access Private
 * -----------------------------------------
 */
router.get("/:id", protectRoute, getMentorById);   // ⭐ REQUIRED FOR PROFILE PAGE

/**
 * -----------------------------------------
 * UPDATE LOGGED-IN MENTOR PROFILE
 * @route PUT /api/mentors/me
 * @access Private
 * -----------------------------------------
 */
router.put("/me", protectRoute, updateMentor);

/**
 * -----------------------------------------
 * DELETE LOGGED-IN MENTOR PROFILE
 * @route DELETE /api/mentors/me
 * @access Private
 * -----------------------------------------
 */
router.delete("/me", protectRoute, deleteMentor);

export default router;
