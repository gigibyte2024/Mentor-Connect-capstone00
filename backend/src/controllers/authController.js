import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const signup = async (req, res) => {
    try {
      const { name, email, password, role } = req.body;
  
      const existing = await prisma.user.findUnique({ where: { email } });
      if (existing)
        return res.status(400).json({ message: "User already exists" });
  
      const hashed = await bcrypt.hash(password, 10);
  
      // Create User
      const user = await prisma.user.create({
        data: { name, email, password: hashed, role },
      });
  
      // ⬇️ Auto-create Mentor entry if role = mentor
      if (role === "mentor") {
        await prisma.mentor.create({
          data: {
            userId: user.id,
            skills: "",
            experience: "",
            rating: 0
          }
        });
      }
  
      res.json({ message: "Signup successful", user });
    } catch (err) {
      console.error("Signup Error:", err);
      res.status(500).json({ error: "Signup failed" });
    }
  };
  
  

// ------------------ LOGIN ------------------
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
      return res.status(400).json({ message: "User not found" });

    // Compare passwords
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(401).json({ message: "Invalid password" });

    // Create JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ message: "Login successful", token, user });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: "Login failed" });
  }
};
