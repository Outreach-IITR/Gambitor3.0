

passport.serializeUser((user , done) => { 
	done(null , user); 
}) 
passport.deserializeUser(function(user, done) { 
	done(null, user); 
}); 

passport.use(new GoogleStrategy({ 
	clientID:process.env.GOOGLE_CLIENT_ID, // Your Credentials here. 
	clientSecret:process.env.GOOGLE_CLIENT_SECRET, // Your Credentials here. 
	callbackURL:"http://localhost:8000/api/v1/auth/google/callback", 
	passReqToCallback:true
}, 
function(request, accessToken, refreshToken, profile, done) { 
	return done(null, profile); 
} 
));


import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { prisma } from '../db/index.js'; // Adjust the import path as necessary

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

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8000/api/v1/auth/google/callback",
  passReqToCallback: true
},
async (request, accessToken, refreshToken, profile, done) => {
  try {
    const user = await findOrCreateUser(profile);
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));

async function findOrCreateUser(profile) {
  let user = await prisma.user.findUnique({ where: { googleId: profile.id } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        googleId: profile.id,
        name: profile.displayName,
        email: profile.email
      }
    });
  }
  
  return user;
}
