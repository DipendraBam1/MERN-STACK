import { signupSchema, loginSchema } from "../validation/schema";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
const JWT_SECRET = process.env.JWT_SECRET;

const signup = async (req: Request, res: Response) => {
  const parsed = signupSchema.safeParse(req.body);
  console.log(parsed);
  if (!parsed.success) {
    return res
      .status(400)
      .json({ message: "Invalid input", errors: parsed.error.flatten() });
  }
  const { firstName, lastName, email, password } = parsed.data;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    let user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: req.body.role,
    });
    res.status(201).json({
      message: "Signup successful",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Error creating user" });
  }
};

const login = async (req: Request, res: Response) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res
      .status(400)
      .json({ message: "Invalid input", errors: parsed.error.flatten() });
  }
  const genericFail = () =>
    res.status(401).json({ message: "Invalid credentials" });

  const { email, password } = parsed.data;
  let user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) {
    return genericFail();
  }

  try {
    const isMatch = await bcrypt.compare(password, user.getDataValue("password"));
    if (!isMatch) {
      return genericFail();
    }
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is required");
    }
    const token = jwt.sign(
      {
        id: user.getDataValue("id"),
        email: user.getDataValue("email"),
        role: user.getDataValue("role"),
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );
    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);

    res.status(500).json({ message: "Error during login" });
  }
};
export { signup, login };
