import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// =====================================================
// ⭐ Ensure mentor exists → auto-create if first time
// =====================================================
async function getOrCreateMentor(userId) {
  let mentor = await prisma.mentor.findFirst({ where: { userId } });

  // Auto-create mentor entry if missing
  if (!mentor) {
    mentor = await prisma.mentor.create({
      data: {
        userId,
        skills: "",
        experience: "",
        rating: 0,
      },
    });
  }

  return mentor;
}

// =====================================================
// ⭐ ADD RESOURCE
// =====================================================
export const addResource = async (req, res) => {
  try {
    const { title, desc, fileUrl, category } = req.body;

    const mentor = await getOrCreateMentor(req.user.id);

    const resource = await prisma.resource.create({
      data: {
        title,
        desc,
        fileUrl,
        category,
        mentorId: mentor.id,
      },
    });

    res.json({ message: "Resource added", resource });
  } catch (err) {
    console.error("Add Resource Error:", err);
    res.status(500).json({ error: "Failed to add resource" });
  }
};

// =====================================================
// ⭐ GET RESOURCES FOR LOGGED-IN MENTOR
// =====================================================
export const getResources = async (req, res) => {
  try {
    const mentor = await getOrCreateMentor(req.user.id);

    const resources = await prisma.resource.findMany({
      where: { mentorId: mentor.id },
      orderBy: { id: "desc" },
    });

    res.json(resources);
  } catch (err) {
    console.error("Get Resources Error:", err);
    res.status(500).json({ error: "Failed to fetch resources" });
  }
};

// =====================================================
// ⭐ UPDATE RESOURCE (with ownership check)
// =====================================================
export const updateResource = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { title, desc, fileUrl, category } = req.body;

    const mentor = await getOrCreateMentor(req.user.id);

    // Check ownership
    const existing = await prisma.resource.findUnique({ where: { id } });

    if (!existing || existing.mentorId !== mentor.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const updated = await prisma.resource.update({
      where: { id },
      data: { title, desc, fileUrl, category },
    });

    res.json({ message: "Resource updated", updated });
  } catch (err) {
    console.error("Update Resource Error:", err);
    res.status(500).json({ message: "Failed to update resource" });
  }
};

// =====================================================
// ⭐ DELETE RESOURCE (with ownership check)
// =====================================================
export const deleteResource = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const mentor = await getOrCreateMentor(req.user.id);

    // Check ownership
    const existing = await prisma.resource.findUnique({ where: { id } });

    if (!existing || existing.mentorId !== mentor.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await prisma.resource.delete({ where: { id } });

    res.json({ message: "Resource deleted successfully" });
  } catch (err) {
    console.error("Delete Resource Error:", err);
    res.status(500).json({ message: "Failed to delete resource" });
  }
};
