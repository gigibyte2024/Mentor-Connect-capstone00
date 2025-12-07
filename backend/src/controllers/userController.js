import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ------------------ GET LOGGED-IN USER ------------------
export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    console.error("GET /me Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------ GET ALL USERS (SEARCH, SORT, FILTER, PAGINATION) ------------------
export const getUsers = async (req, res) => {
  try {
    const {
      search = "",
      role,
      sort = "name",
      order = "asc",
      page = 1,
      limit = 10
    } = req.query;

    const skip = (page - 1) * limit;

    const filters = {
      AND: [
        search
          ? {
              OR: [
                { name: { contains: search, mode: "insensitive" } },
                { email: { contains: search, mode: "insensitive" } },
              ],
            }
          : {},
        role ? { role } : {},
      ],
    };

    const users = await prisma.user.findMany({
      where: filters,
      skip: Number(skip),
      take: Number(limit),
      orderBy: { [sort]: order },
    });

    const total = await prisma.user.count({ where: filters });

    res.json({
      users,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("GET /users Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------ UPDATE USER ------------------
export const updateUser = async (req, res) => {
  try {
    const { name, skills, experience } = req.body;

    const updated = await prisma.user.update({
      where: { id: req.user.id },
      data: { name, skills, experience },
    });

    res.json({ message: "Profile updated", updated });
  } catch (error) {
    console.error("UPDATE user Error:", error);
    res.status(500).json({ message: "Update failed" });
  }
};

// ------------------ DELETE USER ------------------
export const deleteUser = async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: req.user.id },
    });

    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("DELETE user Error:", error);
    res.status(500).json({ message: "Delete failed" });
  }
};
