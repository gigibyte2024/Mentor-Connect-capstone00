// src/routes/chatRoutes.js
import express from "express";
const router = express.Router();

import { sendMessage, getChat } from "../controllers/chatController.js";
import { protectRoute } from "../middleware/protectRoute.js";

// Send message
router.post("/", protectRoute, sendMessage);

// Get chat between logged user & another user
router.get("/:userId", protectRoute, getChat);

export default router;
