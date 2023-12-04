// src/routes/authRoutes.ts
import express, { Request, Response } from "express";
import passport from "../auth/auth";
import { ExtendedRequest } from "../type";
// import User from "../models/User";

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("jwt", { session: false }),
  (req: ExtendedRequest, res: Response) => {
    // Logic for admin login
    // Ensure that the user has admin role
    if (req.user && req.user.role === "admin") {
      res.json({ message: "Admin login successful" });
    } else {
      res.status(403).json({ message: "Access forbidden" });
    }
  }
);

export default router;
