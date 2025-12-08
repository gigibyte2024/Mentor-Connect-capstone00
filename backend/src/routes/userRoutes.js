// src/routes/userRoutes.js
import express from "express";
import { 
  getMe, 
  getUsers, 
  updateUser, 
  deleteUser 
} from "../controllers/userController.js";

import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

/** ------------------------------
 *  GET LOGGED-IN USER PROFILE
 *  @route GET /api/users/me
 *  @access Private
 --------------------------------*/
router.get("/me", protectRoute, getMe);

/** ------------------------------
 *  GET ALL USERS (search, role filter, pagination)
 *  @route GET /api/users
 *  @access Private
 --------------------------------*/
router.get("/", protectRoute, getUsers);

/** ------------------------------
 *  UPDATE LOGGED-IN USER
 *  @route PUT /api/users/update
 *  @access Private
 --------------------------------*/
router.put("/update", protectRoute, updateUser);

/** ------------------------------
 *  DELETE LOGGED-IN USER
 *  @route DELETE /api/users/delete
 *  @access Private
 --------------------------------*/
router.delete("/delete", protectRoute, deleteUser);

export default router;
