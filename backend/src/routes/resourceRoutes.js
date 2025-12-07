import express from "express";
import {
  addResource,
  getResources,
  updateResource,
  deleteResource
} from "../controllers/resourceController.js";

import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// Create
router.post("/", protectRoute, addResource);

// Read (with search + pagination)
router.get("/", protectRoute, getResources);

// Update
router.put("/:id", protectRoute, updateResource);

// Delete
router.delete("/:id", protectRoute, deleteResource);

export default router;
