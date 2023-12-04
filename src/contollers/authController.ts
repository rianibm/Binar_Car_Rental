// src/controllers/AuthController.ts
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

import User from "../models/User";

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.query().insert({
        username,
        password: hashedPassword,
      });
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const user = req.user;
      const token = jsonwebtoken.sign(
        { sub: user.id },
        process.env.JWT_SECRET ||
          "359cd68a4d14425c1f752e8481714ed7c6f5ee5cd949d614e472bf76142d81f0",
        {
          expiresIn: "1h",
        }
      );

      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new AuthController();
