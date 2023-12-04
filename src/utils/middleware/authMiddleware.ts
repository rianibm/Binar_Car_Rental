// src/utils/authMiddleware.ts
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Request, Response, NextFunction } from "express";

import User from "../models/User";

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:
        process.env["JWT_SECRET"] ||
        "359cd68a4d14425c1f752e8481714ed7c6f5ee5cd949d614e472bf76142d81f0",
    },
    async (payload, done) => {
      try {
        const user = await User.query().findById(payload.sub);
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    return next();
  })(req, res, next);
};
