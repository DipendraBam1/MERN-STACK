const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { z } = require("zod");
var jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is required");
}
 

const userInputSchema = z.object({
  name: z.string().min(3),
  password: z.string().min(8),
});
let users = [
  {
    name: "admin",
    password: bcrypt.hashSync("12345678", 10),
  },
];
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
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
app.get("/api/users", authenticateToken, (req, res) => {
  res.json({ users: users.map(({ name }) => ({ name })) });
});

app.post("/api/signup", async (req, res) => {
  const parsed = userInputSchema.safeParse(req.body);
  console.log(parsed);
  if (!parsed.success) {
    return res
      .status(400)
      .json({ message: "Invalid input", errors: parsed.error.flatten() });
  }
  const { name, password } = parsed.data;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ name, password: hashedPassword });
    res.json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: "Error creating user" });
  }
});

app.post("/api/login", async (req, res) => {
  const parsed = userInputSchema.safeParse(req.body);
  if (!parsed.success) {
    return res
      .status(400)
      .json({ message: "Invalid input", errors: parsed.error.flatten() });
  }
  const genericFail = () =>
  res.status(401).json({ message: "Invalid credentials" });

  const { name, password } = parsed.data;
  const user = users.find((u) => u.name === name);

  if (!user) {
    return genericFail();
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return genericFail();
    }
    const token = jwt.sign({ name: user.name }, JWT_SECRET, {
      expiresIn: "1h",
    });
     res.json({ message: "Login successful", token });

  } catch (err) {
      console.error(err);  

    res.status(500).json({ message: "Error during login" });
  }
});

app.listen(port, () => {
  console.log("server listening on port " + port);
});
