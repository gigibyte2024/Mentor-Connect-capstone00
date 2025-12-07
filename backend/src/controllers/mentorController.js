import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ----------------------------------------------------------------------
// GET ALL MENTORS WITH SEARCH + SORT + PAGINATION  (FULL API)
// ----------------------------------------------------------------------
export const getMentors = async (req, res) => {
  try {
    let { search = "", sort = "rating", page = 1, limit = 6 } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    // COUNT total mentors
    const totalMentors = await prisma.mentor.count({
      where: {
        skills: { contains: search, mode: "insensitive" },
      },
    });

    const totalPages = Math.ceil(totalMentors / limit);

    // FETCH mentors
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

// ----------------------------------------------------------------------
// UPDATE MENTOR PROFILE
// ----------------------------------------------------------------------
export const updateMentor = async (req, res) => {
  try {
    const { skills, experience } = req.body;

    const updated = await prisma.mentor.update({
      where: { userId: req.user.id },
      data: { skills, experience },
    });

    res.json({ message: "Mentor updated", updated });
  } catch (err) {
    console.error("Update Mentor Error:", err);
    res.status(500).json({ message: "Failed to update mentor" });
  }
};

// ----------------------------------------------------------------------
// DELETE MENTOR
// ----------------------------------------------------------------------
export const deleteMentor = async (req, res) => {
  try {
    await prisma.mentor.delete({
      where: { userId: req.user.id },
    });

    res.json({ message: "Mentor deleted" });
  } catch (err) {
    console.error("Delete Mentor Error:", err);
    res.status(500).json({ message: "Failed to delete mentor" });
  }
};
