// src/routes/adminRoutes.ts
import express from "express";
import passport from "../auth/auth";

const router = express.Router();

router.post(
  "/add-admin",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Logic to add admin (superadmin only)
    if (req.user.role === "superadmin") {
      // Add admin logic here
      res.json({ message: "Admin added successfully" });
    } else {
      res.status(403).json({ message: "Access forbidden" });
    }
  }
);

export default router;
