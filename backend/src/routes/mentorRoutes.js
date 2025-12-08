import express from "express";
import {
  getMentors,
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

