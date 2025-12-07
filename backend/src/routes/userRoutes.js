// src/routes/userRoutes.js
import express from "express";
import { 
  getUsers, 
  getMe, 
  updateUser, 
  deleteUser 
} from "../controllers/userController.js";

const router = express.Router();

// GET logged-in user
router.get("/me", getMe);

// Fetch all users (search, sort, filter, pagination)
router.get("/", getUsers);

// Update logged-in user profile
router.put("/", updateUser);

// Delete logged-in user
router.delete("/", deleteUser);

export default router;
