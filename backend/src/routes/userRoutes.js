import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ---------------------------------- GET LOGGED-IN USER ----------------------------------
export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: { mentor: true }
    });

    res.json(user);
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
          role ? { role } : {}
        ]
      },
      skip: (page - 1) * limit,
      take: parseInt(limit),
    });

    res.json(users);
  } catch (err) {
    console.error("Get Users Error:", err);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

// ---------------------------------- UPDATE USER (🔑 REQUIRED CRUD) ----------------------------------
export const updateUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    const updated = await prisma.user.update({
      where: { id: req.user.id },
      data: { 
        name,
        ...(password && { password })
      }
    });

    res.json({ message: "Profile updated", updated });
  } catch (err) {
    console.error("Update User Error:", err);
    res.status(500).json({ message: "Failed to update" });
  }
};

// ---------------------------------- DELETE USER (🔑 REQUIRED CRUD) ----------------------------------
export const deleteUser = async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: req.user.id }
    });

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Delete User Error:", err);
    res.status(500).json({ message: "Failed to delete user" });
  }
};
