const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is required");
}


function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"]; // token received in req.header.authorization
  const token = authHeader && authHeader.split(" ")[1]; // expects "Bearer <token>"
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = payload;
    next();
  });
}
module.exports = authenticateToken;