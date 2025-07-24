const express = require('express');
const router = express.Router();
const passport = require('passport');
const { signup, login } = require('../controllers/authController');

// Local signup/login
router.post('/signup', signup);
router.post('/login', login);

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: `${process.env.CLIENT_URL}/login`, session: true }),
  (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}/dashboard`);
  }
);

// LinkedIn OAuth
router.get('/linkedin', passport.authenticate('linkedin', { scope: ['openid', 'profile', 'email'] }));
router.get('/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: `${process.env.CLIENT_URL}/login`, session: true }),
  (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}/dashboard`);
  }
);

module.exports = router;
