// TEMP DEBUG VERSION
import jwt from "jsonwebtoken";

export const protectRoute = (req, res, next) => {
  console.log("🔥 Authorization Header:", req.headers.authorization);
  console.log("🔥 JWT_SECRET in backend:", process.env.JWT_SECRET);

  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      console.log("❌ No token found");
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token decoded:", decoded);

    req.user = decoded;
    next();
  } catch (err) {
    console.log("❌ JWT VERIFY ERROR:", err.message);
    res.status(403).json({ message: "Invalid token" });
  }
};
