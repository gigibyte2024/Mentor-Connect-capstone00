import express from "express";
const router = express.Router();

import { addResource, getResources } from "../controllers/resourceController.js";
import { protectRoute } from "../middleware/protectRoute.js";

// Mentor adds a resource
router.post("/", protectRoute, addResource);

// Mentor views own resources
router.get("/", protectRoute, getResources);

export default router;
