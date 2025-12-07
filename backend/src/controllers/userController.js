// src/controllers/userController.js
import { prisma } from "../utils/prisma.js";

// ------------------ GET ALL USERS ------------------
export const getUsers = async (req, res) => {
  try {
    const { search, sort, page = 1, limit = 10 } = req.query;

    const skip = (page - 1) * limit;

    const users = await prisma.user.findMany({
      where: {
        name: { contains: search || "", mode: "insensitive" }
      },
      orderBy: {
        name: sort === "desc" ? "desc" : "asc"
      },
      skip: Number(skip),
      take: Number(limit)
    });

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

// ------------------ UPDATE PROFILE ------------------
export const updateUser = async (req, res) => {
  try {
    const { name, role } = req.body;

    const updated = await prisma.user.update({
      where: { id: Number(req.user.id) },
      data: { name, role }
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

// ------------------ DELETE USER ------------------
export const deleteUser = async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: Number(req.user.id) }
    });

    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};
