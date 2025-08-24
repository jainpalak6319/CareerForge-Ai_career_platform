const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const axios = require('axios');
const User = require('../models/user'); // MongoDB model
const { generateToken } = require('../utils/jwt');

router.post('/google-login', async (req, res) => {
  try {
    const { token, role } = req.body;

    // Verify token from Google
    const googleRes = await axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`);
    const { email, name, picture } = googleRes.data;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email, name, role, avatar: picture });
    }

    const jwtToken = generateToken(user._id, user.role);
    res.status(200).json({ token: jwtToken, user });

  } catch (err) {
    res.status(400).json({ error: 'Google login failed' });
  }
});

router.post('/linkedin-login', async (req, res) => {
  try {
    const { code, role } = req.body;

    // Exchange code for access token
    const linkedinTokenRes = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      null,
      {
        params: {
          grant_type: 'authorization_code',
          code,
          redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
          client_id: process.env.LINKEDIN_CLIENT_ID,
          client_secret: process.env.LINKEDIN_CLIENT_SECRET
        }
      }
    );

    const accessToken = linkedinTokenRes.data.access_token;

    // Get user info from LinkedIn
    const profileRes = await axios.get('https://api.linkedin.com/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const emailRes = await axios.get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    const name = `${profileRes.data.localizedFirstName} ${profileRes.data.localizedLastName}`;
    const email = emailRes.data.elements[0]['handle~'].emailAddress;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email, name, role });
    }

    const jwtToken = generateToken(user._id, user.role);
    res.status(200).json({ token: jwtToken, user });

  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'LinkedIn login failed' });
  }
});

module.exports = router;
