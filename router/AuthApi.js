import { Router } from "express";
import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email: email });
  if (userExists) {
    res.status(406).json({ message: "User Already Exists" });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    name: name,
    email: email,
    password: hashedPassword,
  });

  await user.save();
  res.json({ message: "Success" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(404).json({ message: "User Not Found" });
    return;
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    res.status(404).json({ message: "Invalid Password" });
    return;
  }

  const payload = {
    username: email,
    id: user._id,
  };

  const token = jwt.sign(payload, process.env.LOGIN_KEY);

  res.json({ message: "Success", token, user });
});

router.post("/reset", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email: email,
  });
  if (!user) {
    return res.json({ message: "User Not Found" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  user.password = hashedPassword;
  await user.save();
  res.json({ message: "Success" });
});

export default router;
