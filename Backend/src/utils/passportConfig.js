import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import { prisma } from "../db/index.js";
import generateTokenAndSetCookie from "./generateTokenAndSetCookie.js";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/google/callback",
      passReqToCallback: true,
      scope: ["profile", "email"],
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        const user = await findOrCreateUser(profile);
        const payloadData = {
          id: user.id,
          email: user.email,
        };
        generateTokenAndSetCookie(payloadData, req.res);
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

async function findOrCreateUser(profile) {
  let user = await prisma.user.findUnique({ where: { email: profile.email } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        googleId: profile.id,
        name: profile.displayName,
        email: profile.email,
      },
    });
  } else if (!user.googleId) {
    user = await prisma.user.update({
      where: { email: profile.email },
      data: { googleId: profile.id },
    });
  }

  return user;
}
