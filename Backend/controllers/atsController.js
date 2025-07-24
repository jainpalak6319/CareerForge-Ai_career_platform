// Backend/controllers/atsController.js
const path = require('path');

// Dummy ATS logic
exports.checkATS = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const resumeFile = req.file;

    // Mock scoring logic
    const score = Math.floor(Math.random() * 100) + 1;

    res.status(200).json({
      fileName: resumeFile.originalname,
      atsScore: score,
      message: 'ATS analysis completed',
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
