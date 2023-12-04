import express from "express";
import passport from "../auth/auth";
import { ExtendedRequest } from "../type";

const router = express.Router();

router.post(
  "/add-admin",
  passport.authenticate("jwt", { session: false }),
  (req: ExtendedRequest, res) => {
    // Add the type for user in the request
    // Logic to add admin (superadmin only)
    if (req.user && req.user.role === "superadmin") {
      // Add admin logic here
      res.json({ message: "Admin added successfully" });
    } else {
      res.status(403).json({ message: "Access forbidden" });
    }
  }
);

export default router;
