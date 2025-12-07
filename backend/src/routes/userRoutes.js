// src/routes/userRoutes.js
import express from "express";
const router = express.Router();

import { getUsers, updateUser, deleteUser } from "../controllers/userController.js";
import { protectRoute } from "../middleware/protectRoute.js";

// READ users (search, sort, filter, pagination)
router.get("/", protectRoute, getUsers);

// UPDATE profile
router.put("/", protectRoute, updateUser);

// DELETE user
router.delete("/", protectRoute, deleteUser);

export default router;
