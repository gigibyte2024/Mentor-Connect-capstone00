// src/controllers/userController.js
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

/* ============================================
   GET LOGGED-IN USER → /api/users/me
   ============================================
*/
export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: {
        mentor: true,
        quizzes: true
      }
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.error("getMe Error:", err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

/* ============================================
   GET ALL USERS (Search, Filter, Pagination)
   /api/users
   ============================================
*/
export const getUsers = async (req, res) => {
  try {
    const { search = "", role, page = 1, limit = 10 } = req.query;

    const skip = (page - 1) * limit;

    const users = await prisma.user.findMany({
      where: {
        AND: [
          {
            OR: [
              { name: { contains: search, mode: "insensitive" } },
              { email: { contains: search, mode: "insensitive" } }
            ]
          },
          role ? { role } : {}
        ]
      },
      skip: Number(skip),
      take: Number(limit),
      select: {
        id: true,
        name: true,
        email: true,
        role: true
      }
    });

    res.json({
      page: Number(page),
      limit: Number(limit),
      results: users.length,
      users
    });
  } catch (err) {
    console.error("getUsers Error:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

/* ============================================
   UPDATE LOGGED-IN USER → /api/users/update
   ============================================
*/
export const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const dataToUpdate = {};

    if (name) dataToUpdate.name = name;
    if (email) dataToUpdate.email = email;
    if (password) dataToUpdate.password = await bcrypt.hash(password, 10);

    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: dataToUpdate
    });

    res.json({
      message: "Profile updated successfully",
      updatedUser
    });
  } catch (err) {
    console.error("updateUser Error:", err);
    res.status(500).json({ error: "Failed to update profile" });
  }
};

/* ============================================
   DELETE LOGGED-IN USER → /api/users/delete
   ============================================
*/
export const deleteUser = async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: req.user.id }
    });

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("deleteUser Error:", err);
    res.status(500).json({ error: "Failed to delete user" });
  }
};
