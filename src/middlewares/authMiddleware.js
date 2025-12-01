// middleware/auth.js
import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ message: "Missing Authorization header" });
  }

  const token = header.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Now contains: userId, role
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid/Expired Token" });
  }
};
