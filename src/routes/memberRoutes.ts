// src/routes/memberRoutes.ts
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Validate user input
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const existingUser = await User.query().where("username", username).first();
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.query().insert({
      username,
      password: hashedPassword,
      role: "member",
    });

    return res.json({
      message: "Member registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
