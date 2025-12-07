// src/controllers/mentorController.js
import { prisma } from "../utils/prisma.js";

// ------------------ CREATE MENTOR PROFILE ------------------
export const createMentor = async (req, res) => {
  try {
    const { skills, experience } = req.body;

    const mentor = await prisma.mentor.create({
      data: {
        skills,
        experience,
        userId: req.user.id
      }
    });

    res.json(mentor);
  } catch (err) {
    res.status(500).json({ message: "Mentor creation failed" });
  }
};

// ------------------ GET ALL MENTORS ------------------
export const getMentors = async (req, res) => {
  try {
    const { search, domain, sort, page = 1, limit = 10 } = req.query;

    const filter = {
      skills: { contains: domain || "", mode: "insensitive" },
      user: {
        name: { contains: search || "", mode: "insensitive" }
      }
    };

    const mentors = await prisma.mentor.findMany({
      where: filter,
      orderBy: { rating: sort === "desc" ? "desc" : "asc" },
      include: { user: true },
      skip: (page - 1) * limit,
      take: Number(limit)
    });

    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: "Could not fetch mentors" });
  }
};
