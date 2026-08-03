const { signupSchema, loginSchema } = require("../validation/schema");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const signup  =  async (req, res) => {
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
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
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
}

const login = async (req, res) => {
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
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return genericFail();
    }
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
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
}

module.exports ={signup,login}