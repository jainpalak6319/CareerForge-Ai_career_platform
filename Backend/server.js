// Load environment variables
require('dotenv').config();
console.log("🔐 Using API Key:", process.env.OPENROUTER_API_KEY ? "Present" : "Missing");

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');

const postRouter = require("./routes/postRouter");
const authRoutes = require('./routes/authRoutes');
const resumeRoutes = require('./routes/resumeRoutes'); // ✅ New
const atsRoutes = require('./routes/atsRoutes');       // ✅ New
const connectDB = require("./config/db");

const emailTemplates = require('./emailTemplates');    // ✅ Email template route dependency

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();
if (!connectDB) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.log('❌ MongoDB connection error:', err));
}

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport); // ✅ Passport strategy config

// Routes
app.use("/api/post", postRouter);       // Existing
app.use('/api/auth', authRoutes);       // ✅ Auth
app.use('/api/resumes', resumeRoutes);  // ✅ Resume
app.use('/api/ats', atsRoutes);         // ✅ ATS

// ✅ Email Generator Endpoint
app.post('/generate-email', (req, res) => {
  const { emailType, formData } = req.body;
  if (!emailType || !formData) {
    return res.status(400).json({ error: 'Missing data' });
  }

  const templateFn = emailTemplates[emailType];
  if (!templateFn) {
    return res.status(400).json({ error: 'Unsupported email type' });
  }

  try {
    const email = templateFn(formData);
    const subjectMatch = email.match(/^Subject:(.*)$/m);
    const subject = subjectMatch ? subjectMatch[1].trim() : "Subject not found";
    const body = email.replace(/^Subject:.*$/m, '').trim();
    res.json({ subject, body });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email generation failed. Try again." });
  }
});

// Health check
app.get("/", (req, res) => {
  res.send("CareerForge Backend is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
