const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const User = require('../models/User');

module.exports = function (passport) {
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => User.findById(id).then(user => done(null, user)));

  // Google
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
  },
    async (accessToken, refreshToken, profile, done) => {
      const existing = await User.findOne({ email: profile.emails[0].value });
      if (existing) return done(null, existing);

      const newUser = await User.create({
        fullName: profile.displayName,
        email: profile.emails[0].value,
        role: 'jobseeker',
        provider: 'google',
        avatar: profile.photos[0].value
      });
      done(null, newUser);
    }
  ));

  // LinkedIn
  passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: "/api/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_liteprofile']
  },
    async (accessToken, tokenSecret, profile, done) => {
      const existing = await User.findOne({ email: profile.emails[0].value });
      if (existing) return done(null, existing);

      const newUser = await User.create({
        fullName: profile.displayName,
        email: profile.emails[0].value,
        role: 'recruiter',
        provider: 'linkedin',
        avatar: profile.photos[0].value
      });
      done(null, newUser);
    }
  ));
};
