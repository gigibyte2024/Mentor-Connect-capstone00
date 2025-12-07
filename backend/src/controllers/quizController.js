// src/controllers/quizController.js
import { prisma } from "../utils/prisma.js";

export const submitQuiz = async (req, res) => {
  try {
    const { score, topic } = req.body;

    const quiz = await prisma.quizScore.create({
      data: {
        score,
        topic,
        userId: req.user.id
      }
    });

    res.json({ message: "Quiz submitted", quiz });
  } catch (err) {
    res.status(500).json({ message: "Quiz submit failed" });
  }
};
