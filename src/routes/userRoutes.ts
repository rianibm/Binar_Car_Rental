// src/routes/userRoutes.ts
import express, { Response } from "express";
import passport from "../auth/auth";
import User from "../models/User";
import { ExtendedRequest } from "../types";

const router = express.Router();

router.get(
  "/current-user",
  passport.authenticate("jwt", { session: false }),
  (req: ExtendedRequest, res: Response) => {
    // Logic to get the current user
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  }
);

export default router;
