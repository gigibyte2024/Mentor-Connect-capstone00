import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// ---------------------------------- GET LOGGED-IN USER ----------------------------------
export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: { mentor: true },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    // ❌ NEVER return password
    const { password, ...safeUser } = user;

    res.json(safeUser);
  } catch (err) {
    console.error("GetMe Error:", err);
    res.status(500).json({ message: "Failed to fetch user" });
  }
};

// ---------------------------------- GET ALL USERS ----------------------------------
export const getUsers = async (req, res) => {
  try {
    const { search = "", role, page = 1, limit = 10 } = req.query;

    const users = await prisma.user.findMany({
      where: {
        AND: [
          { name: { contains: search, mode: "insensitive" } },
          role ? { role } : {},
        ],
      },
      skip: (page - 1) * limit,
      take: parseInt(limit),
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        mentor: true,
      },
    });

    res.json(users);
  } catch (err) {
    console.error("Get Users Error:", err);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

// ---------------------------------- UPDATE USER ----------------------------------
export const updateUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    const updateData = {};

    if (name) updateData.name = name;

    // If password exists → hash it before saving
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: updateData,
    });

    const { password: _, ...safeUser } = updatedUser;

    res.json({ message: "Profile updated", user: safeUser });
  } catch (err) {
    console.error("Update User Error:", err);
    res.status(500).json({ message: "Failed to update user" });
  }
};

// ---------------------------------- DELETE USER ----------------------------------
export const deleteUser = async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: req.user.id },
    });

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Delete User Error:", err);
    res.status(500).json({ message: "Failed to delete user" });
  }
};
