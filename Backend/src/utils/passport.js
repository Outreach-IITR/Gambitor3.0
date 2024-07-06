import passport from 'passport'; 
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

passport.serializeUser((user , done) => { 
	done(null , user); 
}) 
passport.deserializeUser(function(user, done) { 
	done(null, user); 
}); 

passport.use(new GoogleStrategy({ 
	clientID:process.env.CLIENT_ID, // Your Credentials here. 
	clientSecret:process.env.CLIENT_SECRET, // Your Credentials here. 
	callbackURL:"http://localhost:8000/api/v1/auth/google/callback", 
	passReqToCallback:true
}, 
function(request, accessToken, refreshToken, profile, done) { 
	return done(null, profile); 
} 
));
