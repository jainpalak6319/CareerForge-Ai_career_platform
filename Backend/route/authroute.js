const express = require("express");
const { registerUser, loginUser, getProfile } = require("../controllers/authController");
const { protect, adminOnly } = require("../middleware/authmiddleware");
 
const router = express.Router();
 
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);
 
// Example admin-only route
router.get("/admin-only", protect, adminOnly, (req, res) => {
  res.send("Welcome Admin!");
});
 
module.exports = router;
 