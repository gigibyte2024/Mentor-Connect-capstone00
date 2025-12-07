// src/controllers/chatController.js
import { prisma } from "../utils/prisma.js";

export const sendMessage = async (req, res) => {
  try {
    const { receiverId, message } = req.body;

    const msg = await prisma.chat.create({
      data: {
        senderId: req.user.id,
        receiverId,
        message
      }
    });

    res.json(msg);
  } catch (err) {
    res.status(500).json({ message: "Message send failed" });
  }
};

export const getChat = async (req, res) => {
  try {
    const { userId } = req.params;

    const chat = await prisma.chat.findMany({
      where: {
        OR: [
          { senderId: req.user.id, receiverId: Number(userId) },
          { senderId: Number(userId), receiverId: req.user.id }
        ]
      },
      orderBy: { timestamp: "asc" }
    });

    res.json(chat);
  } catch {
    res.status(500).json({ message: "Chat fetch failed" });
  }
};
