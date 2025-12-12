import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * GET ALL MENTORS
 * GET /api/mentors
 * Public endpoint used by StudentMentorDiscover
 */
export const getMentors = async (req, res) => {
  try {
    let { search = "", sort = "rating", page = 1, limit = 6 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const totalMentors = await prisma.mentor.count({
      where: {
        skills: { contains: search, mode: "insensitive" },
      },
    });

    const totalPages = Math.max(1, Math.ceil(totalMentors / limit));

    const mentors = await prisma.mentor.findMany({
      where: {
        skills: { contains: search, mode: "insensitive" },
      },
      orderBy: { [sort]: "desc" },
      skip: (page - 1) * limit,
      take: limit,
      include: { user: true },
    });

    return res.json({
      mentors,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.error("Get Mentors Error:", err);
    res.status(500).json({ message: "Failed to fetch mentors" });
  }
};

/**
 * GET SINGLE MENTOR BY ID
 * GET /api/mentors/:id
 * Public endpoint used by Mentor Profile page
 */
export const getMentorById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Invalid mentor id" });
    }

    const mentor = await prisma.mentor.findUnique({
      where: { id },
      include: {
        user: {
          select: { id: true, name: true, email: true, role: true },
        },
        resources: true,
      },
    });

    if (!mentor) return res.status(404).json({ message: "Mentor not found" });

    return res.json(mentor);
  } catch (err) {
    console.error("Get MentorById Error:", err);
    res.status(500).json({ message: "Failed to fetch mentor" });
  }
};

/**
 * UPDATE MENTOR PROFILE
 * PUT /api/mentors/me
 * Protected
 */
export const updateMentor = async (req, res) => {
  try {
    const { skills, experience } = req.body;

    // Find mentor by userId (req.user.id from protectRoute)
    const mentor = await prisma.mentor.findFirst({
      where: { userId: req.user.id },
    });

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found for this user" });
    }

    const updated = await prisma.mentor.update({
      where: { id: mentor.id },
      data: {
        ...(skills !== undefined ? { skills } : {}),
        ...(experience !== undefined ? { experience } : {}),
      },
      include: { user: true },
    });

    return res.json({ message: "Mentor updated", mentor: updated });
  } catch (err) {
    console.error("Update Mentor Error:", err);
    res.status(500).json({ message: "Failed to update mentor" });
  }
};

/**
 * DELETE MENTOR
 * DELETE /api/mentors/me
 * Protected
 */
export const deleteMentor = async (req, res) => {
  try {
    // find mentor by userId
    const mentor = await prisma.mentor.findFirst({
      where: { userId: req.user.id },
    });

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found for this user" });
    }

    await prisma.mentor.delete({
      where: { id: mentor.id },
    });

    return res.json({ message: "Mentor deleted" });
  } catch (err) {
    console.error("Delete Mentor Error:", err);
    res.status(500).json({ message: "Failed to delete mentor" });
  }
};
