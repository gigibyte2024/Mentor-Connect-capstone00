import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// =====================================================================
// ⭐ GET ALL MENTORS (Search + Sort + Pagination)
// =====================================================================
export const getMentors = async (req, res) => {
  try {
    let { search = "", sort = "rating", page = 1, limit = 6 } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    // Count mentors
    const totalMentors = await prisma.mentor.count({
      where: {
        skills: { contains: search, mode: "insensitive" },
      },
    });

    const totalPages = Math.ceil(totalMentors / limit);

    // Fetch mentors
    const mentors = await prisma.mentor.findMany({
      where: {
        skills: { contains: search, mode: "insensitive" },
      },
      orderBy: { [sort]: "desc" },
      skip: (page - 1) * limit,
      take: limit,
      include: { user: true }, // Fetch linked user info
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

// =====================================================================
// ⭐ GET MENTOR BY ID (for Mentor Profile Page)
// =====================================================================
export const getMentorById = async (req, res) => {
  try {
    const mentorId = parseInt(req.params.id);

    const mentor = await prisma.mentor.findUnique({
      where: { id: mentorId },
      include: {
        user: true, // fetch name, email
      },
    });

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    res.json({
      id: mentor.id,
      name: mentor.user.name,
      email: mentor.user.email,
      bio: mentor.bio || "No bio provided yet.",
      experience: mentor.experience || "Not added",
      skills: mentor.skills || [],
      avatarUrl: mentor.avatarUrl || "",
    });

  } catch (err) {
    console.error("GetMentorById Error:", err);
    res.status(500).json({ message: "Failed to fetch mentor" });
  }
};

// =====================================================================
// ⭐ UPDATE MENTOR PROFILE
// =====================================================================
export const updateMentor = async (req, res) => {
  try {
    const { skills, experience, bio, avatarUrl } = req.body;

    const updated = await prisma.mentor.update({
      where: { userId: req.user.id },
      data: { skills, experience, bio, avatarUrl },
    });

    res.json({ message: "Mentor updated", updated });
  } catch (err) {
    console.error("Update Mentor Error:", err);
    res.status(500).json({ message: "Failed to update mentor" });
  }
};

// =====================================================================
// ⭐ DELETE MENTOR
// =====================================================================
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
