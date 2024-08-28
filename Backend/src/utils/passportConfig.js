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

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "/api/v1/auth/google/callback",
//       passReqToCallback: true,
//       scope: ["profile", "email"],
//     },
//     async (req, accessToken, refreshToken, profile, done) => {
//       try {
//         const {user,isNew} = await findOrCreateUser(profile);
//         user.isNew = isNew;
//         const payloadData = {
//           id: user.id,
//           email: user.email,
//         };
//         generateTokenAndSetCookie(payloadData, req.res);
//         console.log(user.isNew);
//         return done(null, user);
//       } catch (err) {
//         return done(err, null);
//       }
//     }
//   )
// );

// async function findOrCreateUser(profile) {
//   let user = await prisma.user.findUnique({ where: { email: profile.email } });
//   let isNew = false;
//   if (!user) {
//     user = await prisma.user.create({
//       data: {
//         googleId: profile.id,
//         name: profile.displayName,
//         email: profile.email,
//       },
//     });
//     isNew=true;
//   } else if (!user.googleId) {
//     user = await prisma.user.update({
//       where: { email: profile.email },
//       data: { googleId: profile.id },
//     });
//     isNew=true;
//   }
//   else{
//     isNew = false;
//   }

//   return {user,isNew};
// }

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/google/callback",
      passReqToCallback: true, // Pass request to callback
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        const { user, isNew } = await findOrCreateUser(profile);
        user.isNew = isNew;

        const payloadData = {
          id: user.id,
          email: user.email,
        };

        generateTokenAndSetCookie(payloadData, req.res);
        console.log(user.isNew);

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);


async function findOrCreateUser(profile) {
  let user = await prisma.user.findUnique({ where: { email: profile.emails[0].value } });
  let isNew = false;

  if (!user) {
    user = await prisma.user.create({
      data: {
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
      },
    });
    isNew = true;
  } else if (!user.googleId) {
    user = await prisma.user.update({
      where: { email: profile.emails[0].value },
      data: { googleId: profile.id },
    });
    isNew =false;
  } else {
    isNew = false;
  }

  return { user, isNew };
}
