// src/auth/passport-config.ts
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "your_secret_key",
};

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    // Verify user and call done accordingly
  })
);
