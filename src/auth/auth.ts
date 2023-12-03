// auth.ts
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Request } from "express";
import User from "../models/User"; // Import the User model

export interface ExtendedRequest extends Request {
  user: NonNullable<User>; // Ensure user is not nullable or undefined
}

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey:
    "359cd68a4d14425c1f752e8481714ed7c6f5ee5cd949d614e472bf76142d81f0",
};

passport.use(
  new Strategy(options, async (payload, done) => {
    try {
      const user: User | undefined = await User.query().findById(payload.sub);

      if (user === undefined) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);

export default passport;
