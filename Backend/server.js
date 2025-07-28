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

// Initialize Express app
const app = express();

// Connect to MongoDB using either mongoose directly or your existing method
connectDB(); // if connectDB uses mongoose.connect inside

// Or use this if you're switching to inline connection:
if (!connectDB) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.log('❌ MongoDB connection error:', err));
}

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000", // fallback
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
app.use("/api/post", postRouter);       // Existing route
app.use('/api/auth', authRoutes);       // ✅ New Auth route
app.use('/api/resumes', resumeRoutes);  // ✅ New Resume route
app.use('/api/ats', atsRoutes);         // ✅ New ATS route

// Health check
app.get("/", (req, res) => {
  res.send("CareerForge Backend is running");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
