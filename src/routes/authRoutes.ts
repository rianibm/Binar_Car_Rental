// src/routes/authRoutes.ts
import express, { Request, Response } from "express";
import passport from "../auth/auth";
import User from "../models/User"; // Import your User model

// Define an extended Request type to include the 'user' property
interface ExtendedRequest extends Request {
  user?: User; // Adjust the type based on your User model
}

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("jwt", { session: false }),
  (req: ExtendedRequest, res: Response) => {
    // Logic for superadmin login
    // Ensure that the user has superadmin role
    if (req.user && req.user.role === "superadmin") {
      res.json({ message: "Superadmin login successful" });
    } else {
      res.status(403).json({ message: "Access forbidden" });
    }
  }
);

export default router;
