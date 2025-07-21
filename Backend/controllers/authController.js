const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  console.log("Signup route hit");
  try {
    console.log("Request body:", req.body);

    const { name, email, password, role, location, education, skills } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed");

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      location,
      education,
      skills,
    });

    const savedUser = await newUser.save();
    console.log("User saved:", savedUser);

    return res.status(201).json({ message: "User created successfully", user: savedUser });

  } catch (error) {
    console.error("Signup error:", error.message);
    return res.status(500).json({ message: "Signup failed", error: error.message });
  }
};
exports.login = async (req, res) => {
  console.log("Login route hit");
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Optionally: Generate JWT
    const jwt = require('jsonwebtoken');
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    console.log("Login successful");
    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ message: "Login failed", error: error.message });
  }
};
