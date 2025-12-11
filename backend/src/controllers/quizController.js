// src/controllers/quizController.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const QUIZ_DATA = [
  {
    id: 1,
    topic: "Python Basics",
    questions: [
      {
        question: "What is the output of print(len('hello'))?",
        options: ["4", "5", "6", "Error"],
        answer: 1
      },
      {
        question: "Which keyword is used to create a function in Python?",
        options: ["func", "define", "def", "lambda"],
        answer: 2
      }
    ]
  },
  {
    id: 2,
    topic: "DSA Fundamentals",
    questions: [
      {
        question: "Time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: 1
      },
      {
        question: "Which data structure uses FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1
      }
    ]
  }
];

// ---------------- GET ALL QUIZZES ----------------
export const getAllQuizzes = async (req, res) => {
  const minimal = QUIZ_DATA.map((q) => ({
    id: q.id,
    topic: q.topic
  }));

  res.json(minimal);
};

// ---------------- GET QUIZ BY ID ----------------
export const getQuizById = async (req, res) => {
  const quizId = parseInt(req.params.id);
  const quiz = QUIZ_DATA.find((q) => q.id === quizId);

  if (!quiz) return res.status(404).json({ message: "Quiz not found" });

  res.json(quiz);
};

// ---------------- SUBMIT SCORE ----------------
export const submitQuiz = async (req, res) => {
  try {
    const { topic, score } = req.body;

    const newScore = await prisma.quizScore.create({
      data: {
        userId: req.user.id,
        topic,
        score
      }
    });

    res.json({ message: "Quiz submitted", newScore });
  } catch (err) {
    console.error("Submit Error:", err);
    res.status(500).json({ message: "Failed to submit quiz" });
  }
};
