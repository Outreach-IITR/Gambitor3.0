import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import { prisma } from "../db/index.js"; // Adjust the import path as necessary

passport.serializeUser((user, done) => {
  done(null, user.id); // Serialize user ID instead of entire user object
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
      callbackURL: "http://localhost:8000/api/v1/auth/google/callback",
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        const user = await findOrCreateUser(profile);
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

async function findOrCreateUser(profile) {
  // Find user by email first
  let user = await prisma.user.findUnique({ where: { email: profile.email } });

  if (!user) {
    // If user does not exist, create a new one
    user = await prisma.user.create({
      data: {
        googleId: profile.id,
        name: profile.displayName,
        email: profile.email,
      },
    });
  } else if (!user.googleId) {
    // If user exists but does not have googleId, update it
    user = await prisma.user.update({
      where: { email: profile.email },
      data: { googleId: profile.id },
    });
  }

  return user;
}
