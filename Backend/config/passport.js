const GoogleStrategy = require('passport-google-oauth20').Strategy;
const OpenIDConnectStrategy = require('passport-openidconnect').Strategy;
const User = require('../models/user');

module.exports = function (passport) {
  // Session serialization
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => User.findById(id).then(user => done(null, user)));

  // ✅ Google Strategy
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
  },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails?.[0]?.value;
      if (!email) {
        console.error('Google profile has no email:', profile);
        return done(new Error("Email not provided by Google"), null);
      }

      const existing = await User.findOne({ email });
      if (existing) return done(null, existing);

      const newUser = await User.create({
        fullName: profile.displayName,
        email,
        googleId: profile.id,
        role: 'jobseeker',
        provider: 'google',
        avatar: profile.photos?.[0]?.value || '',
        location: "",
        education: "",
        skills: []
      });
      done(null, newUser);
    }
  ));

  // ✅ LinkedIn via OpenID Connect Strategy
  passport.use('linkedin', new OpenIDConnectStrategy({
    issuer: 'https://www.linkedin.com',
    authorizationURL: 'https://www.linkedin.com/oauth/v2/authorization',
    tokenURL: 'https://www.linkedin.com/oauth/v2/accessToken',
    userInfoURL: 'https://api.linkedin.com/v2/userinfo',
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: process.env.LINKEDIN_REDIRECT_URI,
    scope: ['openid', 'profile', 'email']
  },
    async (issuer, sub, profile, done) => {
      const email = profile.emails?.[0]?.value;
      if (!email) {
        console.error("❌ LinkedIn profile has no email:", profile);
        return done(new Error("Email not provided by LinkedIn"), null);
      }

      const existing = await User.findOne({ email });
      if (existing) return done(null, existing);

      const newUser = await User.create({
        fullName: profile.displayName,
        email,
        role: 'recruiter',
        linkedinId: profile.id,
        authType: 'linkedin',
        provider: 'linkedin',
        avatar: profile.photos?.[0]?.value || ''
      });

      done(null, newUser);
    }
  ));
};
