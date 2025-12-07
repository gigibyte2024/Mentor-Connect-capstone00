import express from "express";
import {
  getMentors,
  updateMentor,
  deleteMentor
} from "../controllers/mentorController.js";

import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, getMentors);
router.put("/", protectRoute, updateMentor);
router.delete("/", protectRoute, deleteMentor);

export default router;
