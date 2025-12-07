import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ADD RESOURCE
export const addResource = async (req, res) => {
  try {
    const { title, desc, fileUrl, category } = req.body;

    const mentor = await prisma.mentor.findFirst({
      where: { userId: req.user.id }
    });

    if (!mentor) return res.status(400).json({ message: "Mentor not found" });

    const resource = await prisma.resource.create({
      data: {
        title,
        desc,
        fileUrl,
        category,
        mentorId: mentor.id
      }
    });

    res.json({ message: "Resource added", resource });
  } catch (err) {
    console.error("Add Resource Error:", err);
    res.status(500).json({ error: "Failed to add resource" });
  }
};

// GET RESOURCES FOR LOGGED-IN MENTOR
export const getResources = async (req, res) => {
  try {
    const mentor = await prisma.mentor.findFirst({
      where: { userId: req.user.id }
    });

    if (!mentor) return res.status(400).json({ message: "Mentor not found" });

    const resources = await prisma.resource.findMany({
      where: { mentorId: mentor.id }
    });

    res.json(resources);
  } catch (err) {
    console.error("Get Resources Error:", err);
    res.status(500).json({ error: "Failed to fetch resources" });
  }
};
